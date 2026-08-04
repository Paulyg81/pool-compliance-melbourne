---
name: publish-blog-posts
description: Write the next batch of SEO guide articles for Pool Compliance Melbourne from the content queue, publish them to the content collection, and deploy the site. Use on the recurring content schedule for this project.
---

# Publish blog posts

This skill runs unattended on a schedule. Follow it exactly, in order. Do not skip the
verification steps — nothing in this repo has a human reviewing it before it goes live.

## 1. Orient

Read `content-plan.md` at the repo root. It lists what's already published and what's
queued next. Read 2-3 of the most recent files in `src/content/guides/` to recalibrate on
house style: Australian English, ~1,200+ words, genuine regulatory expertise, no invented
statistics, general accurate statements where a specific fact isn't certain, FAQ section at
the end, internal links to relevant `/services/` pages using markdown link syntax.

Also skim `src/config.ts` for the current `PRICE`, `GUARANTEE_SHORT`, `GUARANTEE_FULL`,
`RE_INSPECTION_FEE`, and `RE_INSPECTION_WINDOW_DAYS` constants — reuse these facts
consistently rather than restating old figures from memory. If pricing/guarantee terms in
this file look different from what an older guide says, trust `config.ts` — it's the
source of truth and the older guide is presumably stale (fix it if you notice one, but
that's secondary to the main job).

## 2. Pick topics

Take the next **2** topics from the "Queued" list in `content-plan.md`, in order. If fewer
than 3 topics remain in the queue after removing these 2, generate 5-8 new topic ideas and
append them to the queue before moving on — prioritise genuine, distinct search intent
(gate hardware specifics, material comparisons, ownership-structure edge cases, buyer/seller/
landlord/tenant angles, council-specific quirks) over rephrasing a topic already covered.
Never write a topic that duplicates the substance of an existing guide, even under a
different title — check the existing `src/content/guides/*.md` list for overlap first.

## 3. Write each post

For each topic, create `src/content/guides/<slug>.md` with frontmatter matching the schema
in `src/content.config.ts` (`title`, `h1`, `metaTitle`, `metaDescription`, `publishDate`,
optionally `updatedDate`, `relatedServices` — an array of slugs from `src/config.ts`
`SERVICES`). Use today's date for `publishDate`. Keep `metaTitle` ≤60 characters and
`metaDescription` ≤155 characters — verify the actual character count, don't estimate.

Word count matters: write substantively, don't pad. Target 1,200+ words of real content.
After writing, run `wc -w src/content/guides/<slug>.md` and add a section if it's short of
1,200 — the existing published guides in this repo (e.g. `pool-fence-requirements-victoria.md`)
show the expected depth and structure.

## 4. Update the content plan

Move both topics from "Queued" to "Published" in `content-plan.md`, with today's date, in
the same format as the existing entries.

## 5. Build and verify before deploying anything

```
cd "<repo root>"
ASTRO_TELEMETRY_DISABLED=1 npx astro build
```

The build must complete with no errors. Then verify the two new pages specifically:

```
python3 -c "
import re
for slug in ['<slug-1>', '<slug-2>']:
    html = open(f'dist/guides/{slug}/index.html', encoding='utf-8').read()
    title = re.search(r'<title>([^<]*)</title>', html).group(1)
    desc = re.search(r'name=\"description\" content=\"([^\"]*)\"', html).group(1)
    h1 = len(re.findall(r'<h1[ >]', html))
    assert len(title) <= 60, f'{slug} title too long: {len(title)}'
    assert len(desc) <= 155, f'{slug} description too long: {len(desc)}'
    assert h1 == 1, f'{slug} has {h1} H1 tags'
    print(slug, 'OK')
"
```

If any assertion fails, fix the source file and rebuild before proceeding. Do not deploy a
build that fails these checks.

## 6. Commit and push

```
git add -A
git commit -m "Add guides: <topic 1>, <topic 2>

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
git push origin main
```

## 7. Deploy

Deployment is handled by Cloudflare Pages' native Git integration, connected to this
repo's `main` branch — pushing to `main` in step 6 is the entire deploy action. There is no
separate deploy command to run, and no Cloudflare credential needed in this session. If the
`git push` in step 6 fails (auth error, rejected push, etc.), stop and report that clearly
rather than retrying blindly or trying to work around it with `--force` — a failed push
means this job's GitHub credential needs the site owner's attention.

## 8. Report

Finish with a short, factual summary: which 2 topics were published, the build/deploy
result, and the current queue depth remaining in `content-plan.md`. No self-congratulation,
just the facts — this report is what the site owner sees to spot-check the job is behaving.
