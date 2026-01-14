import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { question, outcomes } = await request.json();

    if (!question || !outcomes || !Array.isArray(outcomes)) {
      return NextResponse.json(
        { error: 'Invalid request. Provide question and outcomes array.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const client = new Anthropic({
      apiKey: apiKey,
    });

    const response = await client.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 2048,
      messages: [{
        role: 'user',
        content: `You are an expert forecaster and analyst specializing in prediction markets. Your role is to provide objective, data-driven probability estimates based on careful analysis of available information.

MARKET QUESTION:
"${question}"

POSSIBLE OUTCOMES:
${outcomes.map((o: string, i: number) => `${i + 1}. ${o}`).join('\n')}

ANALYSIS FRAMEWORK:
Please analyze this market by considering:
- Historical data and trends relevant to this question
- Current events and recent developments
- Expert opinions and consensus views
- Statistical models and base rates
- Potential biases in the current market price
- Information asymmetries and uncertainty factors

IMPORTANT GUIDELINES:
- If the question is vague, incomplete, or lacks context, acknowledge this in your reasoning and explain what additional information would be needed for a more confident forecast
- Provide genuine probabilistic reasoning, not just 50-50 splits for unclear questions
- Consider what the question is likely asking based on context clues
- Be explicit about your assumptions and uncertainties
- Assign confidence levels honestly (Low/Medium/High)

OUTPUT FORMAT:
Return your analysis as valid JSON with this exact structure:
{
  "probabilities": {
    "${outcomes[0]}": 0.XX,
    "${outcomes[1]}": 0.YY
  },
  "reasoning": "3-5 sentences explaining your probability estimates, including key assumptions and uncertainties. Be specific about why you assigned these probabilities.",
  "keyFactors": [
    "First major factor influencing this outcome with specific details",
    "Second factor with explanation of its impact",
    "Third factor and why it matters",
    "Fourth factor (if relevant)",
    "Fifth factor (if relevant)"
  ],
  "confidence": "Low|Medium|High"
}

CRITICAL REQUIREMENTS:
- Probabilities MUST be decimals between 0 and 1 (not percentages)
- Probabilities MUST sum to exactly 1.0
- Provide 3-5 key factors (minimum 3, maximum 5)
- Reasoning must be substantive and specific (not generic)
- If question is unclear, explain what's unclear and state assumptions

Return ONLY the JSON object, no additional text.`
      }]
    });

    const content = response.content[0];
    const forecast = content.type === 'text' ? content.text : '';

    return NextResponse.json({ forecast });
  } catch (error) {
    console.error('Error generating forecast:', error);
    return NextResponse.json(
      { error: 'Failed to generate forecast' },
      { status: 500 }
    );
  }
}
