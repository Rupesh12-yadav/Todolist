# LIVE DEPLOYMENT GUIDE

## Option 1: Vercel (Recommended - Free)

### Steps:
1. Go to https://vercel.com
2. Sign up with GitHub account
3. Click "New Project"
4. Import your GitHub repository: `Rupesh12-yadav/Todolist`
5. Deploy automatically

### Database:
- Use MongoDB Atlas (free): https://cloud.mongodb.com
- Create cluster, get connection string
- Add to Vercel environment variables

## Option 2: Netlify + Railway

### Frontend (Netlify):
1. https://netlify.com
2. Connect GitHub repo
3. Build command: `cd Frontend && npm run build`
4. Publish directory: `Frontend/dist`

### Backend (Railway):
1. https://railway.app
2. Deploy from GitHub
3. Add MongoDB Atlas connection

## Option 3: Render (All-in-one - Free)

### Steps:
1. Go to https://render.com
2. Sign up with GitHub
3. Create "Web Service"
4. Connect repository
5. Build command: `cd Backend && npm install`
6. Start command: `cd Backend && npm start`

## Quick Demo Link Setup:

### For Submission:
1. Deploy on Vercel/Render
2. Get live URL
3. Add to README.md:

```markdown
## Live Demo
🔗 **Live Application**: https://your-app.vercel.app
```

### Environment Variables Needed:
- MONGODB_URI (MongoDB Atlas)
- JWT_SECRET
- PORT (automatic on most platforms)

## MongoDB Atlas Setup (2 minutes):
1. https://cloud.mongodb.com
2. Create free cluster
3. Create database user
4. Get connection string
5. Add to deployment platform

**Fastest**: Use Vercel - just connect GitHub repo and deploy!