import Anthropic from '@anthropic-ai/sdk';
import { CONFIG } from '../utils/constant-value';

/**
 * claude-3-7-sonnet-20250219 - Use for interview feedback generation
 * claude-3-5-haiku-20241022 - Use for question generation
 * claude-3-haiku-20240307 - Use for greeting response
 */

type MODELS =
  | `claude-3-7-sonnet-20250219`
  | `claude-3-5-haiku-20241022`
  | `claude-3-haiku-20240307`
  | 'claude-sonnet-4-5-20250929'
  | 'claude-haiku-4-5-20251001'
  | 'claude-sonnet-4-6';

export const MODEL_LIST = {
  CLAUDE_3_7_SONNET: 'claude-3-7-sonnet-20250219' as MODELS,
  CLAUDE_3_5_HAIKU: 'claude-3-5-haiku-20241022' as MODELS,
  CLAUDE_3_HAIKU: 'claude-3-haiku-20240307' as MODELS,
  CLAUDE_SONNET_4_5: 'claude-sonnet-4-5-20250929' as MODELS,
  CLAUDE_HAIKU_4_5: 'claude-haiku-4-5-20251001' as MODELS,
  CLAUDE_SONNET_4_6: 'claude-sonnet-4-6' as MODELS,
};

const DEFAULT_MODEL = MODEL_LIST.CLAUDE_HAIKU_4_5;
const DEFAULT_MAX_TOKENS = 3000;
const DEFAULT_TEMPERATURE = 0.8;

const anthropic = new Anthropic({
  apiKey: CONFIG.ANTHROPIC_API_KEY,
});

export const chat = async (
  prompt: string,
  model: MODELS = DEFAULT_MODEL,
  max_tokens: number = DEFAULT_MAX_TOKENS,
  temperature: number = DEFAULT_TEMPERATURE
): Promise<string> => {
  const response = await anthropic.messages.create({
    model,
    max_tokens,
    temperature,
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: prompt,
          },
        ],
      },
    ],
  });

  return (response.content[0] as { text: string }).text;
};
