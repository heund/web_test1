# Exhibition Content Structure

## Overview
Exhibition pages use a **show/hide language system** with separate content blocks for each language in a single HTML file.

## File Structure
```
exhibitions/
├── README.md                    # This file
├── resonance-loop.html         # Resonance Loop (bilingual)
├── rotating-weights.html       # (Future) Rotating Weights
├── embodied-algorithms.html    # (Future) Embodied Algorithms
└── ...                         # Other exhibitions
```

## How It Works

### 1. HTML Structure
Each exhibition HTML file contains **two complete versions**:
```html
<!-- English Version -->
<div class="lang-en">
    <h1>Exhibition Title</h1>
    <p class="exhibition-text">English content...</p>
    <!-- Complete English structure -->
</div>

<!-- Korean Version -->
<div class="lang-kr">
    <h1>전시 제목</h1>
    <p class="exhibition-text">한국어 내용...</p>
    <!-- Complete Korean structure (can be different!) -->
</div>
```

### 2. Language Switching
- CSS shows/hides based on `body[data-lang]` attribute
- No DOM manipulation, just `display: none/block`
- Each language can have completely different structure
- No text swapping = no broken layouts

### 2. script.js Configuration
In `script.js`, exhibitions are configured like this:

```javascript
'exhibition-resonance': {
    breadcrumb: 'exhibitions/resonance-loop.md',
    htmlFile: 'exhibitions/resonance-loop.html',  // Path to HTML file
    html: null  // Will be loaded and cached dynamically
}
```

### 3. Loading Process
1. User clicks exhibition link
2. `loadContent()` checks if `htmlFile` exists
3. `loadExternalHTML()` fetches the HTML file
4. Content is cached in `this.content[fileId].html`
5. Language switching uses existing `data-en`/`data-kr` system

## Adding New Exhibitions

### Step 1: Create HTML File
Create `exhibitions/your-exhibition.html`:

```html
<h1 data-en="Exhibition Title" data-kr="전시 제목"></h1>
<p class="cv-year">2025</p>
<p class="cv-location" data-en="Location" data-kr="장소"></p>

<!-- Images -->
<div class="image-grid">
    <img src="images/your-exhibition/image1.jpg" alt="..." class="grid-image" onclick="openLightbox(this.src)">
</div>

<p class="cv-medium">Medium description</p>

<!-- Content with proper structure -->
<p class="exhibition-text" data-en="" data-kr="한국어 텍스트"></p>

<!-- Sections -->
<div class="process-header" style="margin-top: 48px;">
    <span class="line-marker">//</span> 
    <span data-en="Section Title" data-kr="섹션 제목"></span>
</div>

<!-- Subsections -->
<h3 class="exhibition-subheading" data-en="" data-kr="서브섹션 제목"></h3>

<!-- Lists -->
<ol class="exhibition-list">
    <li data-en="" data-kr="항목 1"></li>
    <li data-en="" data-kr="항목 2"></li>
</ol>

<!-- Code blocks -->
<pre class="code-block"><code>your code here</code></pre>
```

### Step 2: Add to script.js
In the `this.content` object:

```javascript
'exhibition-your-name': {
    breadcrumb: 'exhibitions/your-exhibition.md',
    htmlFile: 'exhibitions/your-exhibition.html',
    html: null
}
```

### Step 3: Link from Overview
In the exhibitions overview section, add a clickable link:

```javascript
<p class="cv-title cv-title-link" 
   data-file="exhibition-your-name" 
   data-en="Your Exhibition Title" 
   data-kr="전시 제목">
   Your Exhibition Title
</p>
```

## CSS Classes Reference

### Typography
- `.exhibition-text` - Body paragraphs (13px, monospace)
- `.exhibition-subheading` - H3 subsection titles (12px, semi-bold)
- `.process-header` - Main section titles (15px, bold, with `//` marker)

### Lists
- `.exhibition-list` - For `<ol>` and `<ul>` (13px, proper spacing)

### Code
- `.code-block` - For `<pre><code>` blocks (12px, monospace, subtle background)

### Layout
- `.image-grid` - Grid layout for images
- `.cv-year`, `.cv-location`, `.cv-medium` - Metadata styling

## Benefits

1. **Maintainability**: Each exhibition is self-contained
2. **Scalability**: Easy to add new exhibitions without bloating script.js
3. **Collaboration**: Multiple people can work on different exhibitions
4. **Version Control**: Clear git diffs for content changes
5. **Reusability**: HTML can be reused or templated
6. **Performance**: Content is cached after first load

## Migration Checklist

When moving an exhibition from inline to external:

- [ ] Create HTML file in `exhibitions/`
- [ ] Remove duplicate text between tags (keep only in `data-kr`)
- [ ] Update `script.js` with `htmlFile` property
- [ ] Test language switching (EN/KR)
- [ ] Test on mobile and desktop
- [ ] Verify images load correctly
- [ ] Check CSS styling
- [ ] Remove old inline version after testing
