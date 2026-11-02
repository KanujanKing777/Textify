# Textify

**Textify** is an AI-powered, ready-to-publish content generator.  

It can generate content in multiple formats, including:  
- Blog posts  
- Pexels stock videos  
- PDFs  
- And more  

Leverage **Textify** to create high-quality, formatted content instantly, saving time and effort.

## Video search

The Video section searches the [Pexels video API](https://www.pexels.com/api/documentation/) for stock footage:

```env
REACT_APP_PEXELS_API_KEY=your_pexels_api_key
```

Restart the development server after changing `.env`. Pexels API keys are exposed in a browser app, so use domain restrictions in your Pexels dashboard and move this request to a backend before deploying publicly.
