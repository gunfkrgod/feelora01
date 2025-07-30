# Deployment Guide for Feelora

## Netlify Deployment

### 1. Build Configuration
The project is already configured for Netlify deployment with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing configured in `netlify.toml`

### 2. Environment Variables Setup

For production deployment, set these environment variables in your Netlify dashboard:

#### Required:
- `VITE_GEMINI_API_KEY`: Your Gemini API key for the AI chat functionality

#### Optional (if you want to use environment variables for Firebase):
- `VITE_FIREBASE_API_KEY`: Your Firebase API key
- `VITE_FIREBASE_AUTH_DOMAIN`: Your Firebase auth domain
- `VITE_FIREBASE_PROJECT_ID`: Your Firebase project ID
- `VITE_FIREBASE_STORAGE_BUCKET`: Your Firebase storage bucket
- `VITE_FIREBASE_MESSAGING_SENDER_ID`: Your Firebase messaging sender ID
- `VITE_FIREBASE_APP_ID`: Your Firebase app ID

### 3. Setting Environment Variables on Netlify

1. Go to your Netlify dashboard
2. Navigate to Site settings > Environment variables
3. Add each variable with its corresponding value
4. Redeploy your site

### 4. Current Configuration

The app currently uses:
- **Firebase**: Hardcoded credentials (working)
- **Gemini API**: Environment variable with fallback to hardcoded key

### 5. Security Notes

- The Gemini API key is currently hardcoded as a fallback
- For production, always use environment variables
- Never commit API keys to version control

### 6. Testing the Chat Feature

After deployment:
1. Navigate to the chat page
2. The AI counselor will respond using the Gemini API
3. Responses are contextual and counselor-focused
4. Fallback responses are available if the API fails

## Features Ready for Deployment

✅ Firebase Authentication  
✅ AI Chat with Gemini API  
✅ Responsive Design  
✅ SPA Routing  
✅ Role-based Access Control  
✅ Professional UI/UX  
✅ Error Handling  
✅ Fallback Responses 