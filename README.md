# CloudBot

CloudBot V1
<br>
This is a account creator bot 
<br>
# Setup
# How to Setup MongoDB?
<br>
Go to https://www.mongodb.com/cloud/atlas and signup and then sign in 
<br><br>

	Create a new Cluster choose a provider and then select a 'FREE TIER' Region 
	For Cluster Tier set it to 'M0 Sandbox'
	Leave everything else to the default setting 
	Set your cluster name 
	Press 'Create Cluster'
  
	Go to the Collections Setting of your Cluster and press 'create new' database 
	Set Database Name to something short and easy to remember 
	Set Collection Name to 'users'
	Press 'Create'. 
	 
	Go back to the 'Overview Tab' 
	Press 'Connect' then Press 'Connect your application' 
	Set driver to 'Node.JS' and version to '3.6 or later'
	Copy the text that starts with 'mongodb+srv'
	in config.json, replace the text "PUT-MONGODB-HERE" with what you just copied 
	For the last step replace the password section of the text you just pasted with your Mongo accounts password.
	 
	Now your Mongoose is set up!

# How to Setup discord bot / token
Go to https://discord.com/developers/applications sign in to your discord account
<br><br>

	Click on New Application and the then Choose a Name
	After that Click on the 'bot tab' then click 'add bot'
	Where it says token click 'COPY'
	in index.js where it says 'PUT-DISCORD-TOKEN-HERE' with what you just copied
	
	Go to the tab 'OAuth2' and then 'URL Generator' where it says 'SCOPES' click bot
	After that where it says 'BOT PERMISSIONS' click 'Administrator'
	then you done that, In 'SCOPES' there should now be a link click 'COPY'
	After make a new chrome tab (what ever browser your using) then past the link on top 
	then add it to your server!
	
	Now your discord bot is set up!
