# cPanel Deployment Troubleshooting

## "Site Can't Be Reached" - Quick Fix Guide

### 1. Check File Structure
Make sure you uploaded the contents of the `out` folder to `public_html`:

```
public_html/
├── index.html          ← Must exist
├── _next/              ← Must exist
├── .htaccess           ← Must exist
├── 404.html
├── favicon.ico
└── (other files)
```

### 2. Verify .htaccess is Working
Your `.htaccess` should be in `public_html/.htaccess` with these contents:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^(.*)$ index.html [L]
```

### 3. Check File Permissions
In cPanel File Manager:
- Directories: 755
- Files: 644
- .htaccess: 644

To fix permissions:
1. Select all files/folders in `public_html`
2. Right-click → "Change Permissions"
3. Set: Owner (Read/Write), Group (Read), World (Read)

### 4. Verify Domain Points to cPanel
- In cPanel → "Domains" → check your domain is pointed correctly
- Ensure DNS A record points to your cPanel server IP

### 5. Check for Index File
Make sure `index.html` exists in `public_html/` and is not empty.

### 6. Test with Simple HTML
Create a test file in `public_html/test.html`:
```html
<!DOCTYPE html>
<html>
<head><title>Test</title></head>
<body><h1>Site is working!</h1></body>
</html>
```

Visit `yourdomain.com/test.html` - if this works, the issue is with your app files.

### 7. Check cPanel Error Logs
1. cPanel → "Metrics" → "Errors"
2. Look for recent error messages
3. Common errors: permission denied, file not found

### 8. Disable .htaccess Temporarily
Rename `.htaccess` to `.htaccess.bak` and try accessing the site.
If it works, there's an issue with the .htaccess rules.

### 9. Clear Browser Cache
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Try in incognito/private browsing mode
- Try from a different device/network

### 10. Check Server Status
In cPanel → "Server Information" → ensure Apache is running.

## Most Common Issues & Solutions

### Issue: White page or 404 errors
**Solution**: Ensure `.htaccess` is uploaded and has correct rewrite rules.

### Issue: Images/CSS not loading
**Solution**: Check that `_next` folder and static assets are uploaded.

### Issue: "Forbidden" error
**Solution**: Fix file permissions (644 for files, 755 for directories).

### Issue: Domain not pointing correctly
**Solution**: Check DNS settings in cPanel → "Domains".

## Quick Test Checklist
- [ ] `index.html` exists in `public_html`
- [ ] `.htaccess` exists in `public_html`
- [ ] `_next` folder exists
- [ ] File permissions are correct
- [ ] Domain points to cPanel
- [ ] No Apache errors in logs
- [ ] Test HTML file works

If you're still having issues, please share:
1. The exact error message you see
2. Your domain name
3. What you see in cPanel error logs
