---
name: geo
description: >
  Generative Engine Optimization (GEO) — optimize web content so AI engines
  (ChatGPT, Perplexity, Claude, Gemini, Copilot) cite and surface the business.
  Adds JSON-LD schemas, entity-rich FAQ blocks, authority signals, and
  structured summaries that LLMs parse and quote. Use when user says "GEO",
  "optimize for AI search", "generative engine optimization", "/geo", or
  wants the site found in AI-generated answers.
---

## What is GEO

Generative Engine Optimization makes content legible and citable to AI answer engines. Unlike SEO (ranking in blue links), GEO targets the AI-generated summary that appears *above* results — and increasingly *instead* of results.

## Core GEO checklist

### 1. Entity clarity
- Define WHO the company is in the first paragraph of every key page.
  Pattern: `[Company] is a [category] based in [location] that [core value prop].`
- Repeat the entity name exactly as the brand uses it (avoid pronouns near the top).

### 2. JSON-LD schemas (machine-readable facts)
Add to `<head>`:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Infama Agency",
  "url": "https://theinfamaagency.com",
  "description": "AI agency specialized in process automation, intelligent marketing, AI content, and custom AI agents.",
  "foundingLocation": "Spain",
  "serviceType": ["AI Automation", "Intelligent Marketing", "AI Content Generation", "Custom AI Agents"],
  "sameAs": ["https://instagram.com/infamaproject", "https://facebook.com/theinfamastudio"]
}
```
Also add: `FAQPage`, `Service`, `WebPage` schemas.

### 3. FAQ blocks with direct answers
AI engines love verbatim Q&A pairs. Each FAQ entry should:
- Ask the question exactly as users phrase it
- Answer in the first sentence (no preamble)
- Include numbers, names, and specifics — vague answers are not cited

### 4. Quotable statistics
Format key metrics as standalone sentences:
> "The Infama Agency has helped 200+ companies achieve an average 300% ROI through AI automation."

Not: "We help many companies get great results."

### 5. Authority signals
- Link out to credible sources when citing claims
- List specific tools, frameworks, and integrations used (ChatGPT, n8n, HubSpot, etc.)
- Include founding year, location, team size, or notable clients if public

### 6. Content structure for AI parsing
- Use H2/H3 hierarchy — AI strips flat walls of text
- One idea per paragraph (LLMs truncate long paragraphs mid-thought)
- Bulleted lists for comparisons and features
- Tables for pricing tiers, service comparisons

### 7. Multilingual GEO
If site serves ES + EN, add `hreflang` tags and duplicate JSON-LD in both languages. AI engines index language-specific content separately.

## How to apply this skill

When invoked (`/geo` or user asks for GEO):
1. Read the target page/component
2. Identify missing entity definitions, schemas, and FAQ gaps
3. Draft JSON-LD blocks for `<head>`
4. Write 5–10 FAQ pairs matching real user queries
5. Rewrite hero copy to lead with entity + value prop in first sentence
6. Add quotable stat sentences near the top of the page
7. Verify all schemas at schema.org/validator

## GEO vs SEO

| | SEO | GEO |
|---|---|---|
| Target | Search ranking algorithm | LLM training + retrieval |
| Signal | Backlinks, keywords, PageRank | Schemas, entity clarity, FAQs |
| Result | Blue link position | AI-cited answer or mention |
| Content | Optimized for crawlers | Optimized for comprehension |

## Boundaries

GEO does not: guarantee citations, manipulate AI outputs, or create false claims. All content must be factually accurate — AI engines cross-reference facts and hallucinate when fed inconsistent data.
