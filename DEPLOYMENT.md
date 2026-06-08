# cPanel Deployment Guide for Journey of Praise

This guide explains how to deploy your Next.js application to Axess cPanel shared hosting.

## Prerequisites

- Axess cPanel hosting account
- Node.js and npm installed locally
- FTP/SFTP or File Manager access to cPanel

## Build Process

### 1. Install Dependencies
```bash
npm install
```

### 2. Build for cPanel
```bash
npm run build:cpanel
```

This will:
- Build the Next.js application
- Export static files to the `out` directory
- Optimize for static hosting

## Deployment Steps

### Method 1: Using File Manager

1. Log into your cPanel account
2. Open File Manager
3. Navigate to `public_html` (or your desired subdirectory)
4. Upload the contents of the `out` folder
5. Make sure the `.htaccess` file is uploaded to the same directory

### Method 2: Using FTP/SFTP

1. Connect to your hosting account via FTP/SFTP
2. Navigate to `public_html` (or your desired subdirectory)
3. Upload the entire contents of the `out` folder
4. Ensure the `.htaccess` file is uploaded

## File Structure After Upload

```
public_html/
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── assets/
├── images/
├── .htaccess
└── (other static files)
```

## Important Configuration Changes

### Next.js Configuration
- `output: 'export'` - Enables static export
- `trailingSlash: true` - Ensures proper routing
- `distDir: 'out'` - Sets output directory
- `images.unoptimized: true` - Disables image optimization for static hosting

### .htaccess Features
- URL rewriting for client-side routing
- Gzip compression
- Browser caching
- Security headers
- Proper MIME types

## Troubleshooting

### 404 Errors on Page Refresh
- Ensure `.htaccess` is uploaded correctly
- Check that `trailingSlash: true` is set in next.config.ts

### Images Not Loading
- Verify `images.unoptimized: true` is set
- Check image paths in the built HTML

### Routing Issues
- Make sure all routes work with trailing slashes
- Test navigation between pages

### Performance Issues
- Enable caching in `.htaccess`
- Optimize image sizes before upload
- Consider using CDN for static assets

## Environment Variables

If you need environment variables:
1. Set them in cPanel under "Environment Variables" or
2. Hardcode them in your application for static builds
3. Use build-time environment variables

## Regular Updates

To update your site:
1. Make changes locally
2. Run `npm run build:cpanel`
3. Upload the new `out` folder contents
4. Clear browser cache if needed

## Support

If you encounter issues:
1. Check cPanel error logs
2. Verify file permissions (755 for directories, 644 for files)
3. Ensure all files are uploaded correctly
4. Test with a simple HTML file first

## Alternative: Subdirectory Deployment

If deploying to a subdirectory (e.g., `public_html/myapp`):
1. Update `basePath` in next.config.ts
2. Adjust `.htaccess` RewriteBase if needed
3. Update all internal links to include the subdirectory path
