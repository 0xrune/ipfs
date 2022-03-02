## Hardhat
```
  &@@@@@@@@@@@@@@                                 
   @@@@@@@@@@@@@@@@@#                             
    @@@@@@@@@@@@@@@@@@@@                          
    @@@@@@@@%/&@@@@@@@@@@@@,                      
    %@@@@@@@%     &@@@@@@@@@@@@                   
     @@@@@@@%         @@@@@@@@@@@@                
     @@@@@@@%             #@@@@@@@@@@*            
     @@@@@@@%                  @@@@@@@@@@@@@@     
     (@@@@@@%                     @@@@@@@@@       
     @@@@@@@%                    %@@@@@@@@@@@     
     /@@@@@@%                 &@@@@@@@@@@@@@@@    
      @@@@@@%             &@@@@@@@@@@@@@@@@@@@%   
      &@@@@@%          @@@@@@@@@@@@               
      &@@@@@%      #@@@@@@@@@@@                   
      @@@@@@@&@@@@@@@@@@@@@                       
      @@@@@@@@@@@@@@@@@                           
      @@@@@@@@@@@@@                               
      %@@@@@@@@@@@@                               
      /@@@@@@@@@@@@@@                             
      %@@@@@  @@@@@@@@@                           
      @@@@@@    *@@@@@@@@                         
      @@@@@@      (@@@@@@@@                       
      &@@@@@        #%@@@@@@@                     
     *@@@@@@           &@@@@@@&                   
     #@@@@@@             @@@@@@@#                 
     @@@@@@@%              @@@@@@@(               
     #@@@@@@%                @@@@@@@&             
     @@@@@@@%                  %@@@@@@@           
     @@@@@@@%                   .&@@@@@@@(        
     %@@@@@@%                     .%@@@@@@@@#     
    %@@@@@@@%                       ,@@@@@@@@@@@* 
   (@@@@@@@@@/                        %%@@@@@@#   
  ,@@@@@@@@@@@@                         &@@%      
```
IPFS modules for uploading content to Pinata or Web3.storage.

# Pinata pinFromFS Implementation
<sub>[Source](https://docs.pinata.cloud/pinata-node-sdk#pinfromfs)</sub>

## Create an account
You need a Pinata.cloud account to get your API key and manage your stored data.

Go to [app.pinata.cloud/signin](https://app.pinata.cloud/signin) to get started.

## Get an API token
Go to [API Keys Page](https://pinata.cloud/keys)

When you click "New API Key" you will be prompted to select permissions and the number of uses for the key you generate. Admin privileges, as you might expect, have access to all API endpoints. If you'd like to specify specific endpoints, you can do so by expanding the endpoint's parent route and toggling on the permission.

By default, all keys have unlimited use. However, if you'd like to limit the number of times a key can be used, you can do so by setting the Max Uses field.
By setting a Key Name, you will be able to easily identify the key and its purpose.

Any key can have its access revoked by clicking the Revoke button. Once a key has been revoked, it can no longer be utilized for any purpose.

Add your API key to `PINATA_API_KEY=` and your API secret to `PINATA_API_SECRET=` in the .env file.

## Usage

Install dependencies.
```shell
npm install
```

```shell
node upload-pinata.js ~/path
```
> Both individual files, as well as directories can be read from.

<br/>
<p style="border-bottom:dotted 1.62px;">&nbsp;</p>
<br/>

# Web3.storage IPFS Quickstart
<sub>[Source](https://docs.web3.storage/#quickstart)</sub>

## Create an account
You need a Web3.Storage account to get your API token and manage your stored data. You can sign up for free using your email address or GitHub.

Go to [web3.storage/login](https://web3.storage/login) to get started.

## Get an API token
It only takes a few moments to get a free API token from Web3.Storage. This token enables you to interact with the Web3.Storage service without using the main website, enabling you to incorporate files stored using Web3.Storage directly into your applications and services.

- Click Account to go to your Web3.Storage account page.
- Click Create an API token.
- Enter a descriptive name for your API token and click Create.
- Make a note of the Token field somewhere secure where you know you won't lose it. You can click Copy to copy your new API token to your clipboard.

> KEEP YOUR API TOKEN PRIVATE
> Do not share your API token with anyone else. This key is specific to your account.

Add your API token to `WEB3_TOKEN_ID=` in the .env file.

## Usage

Install dependencies.
```shell
npm install
```

```shell
node upload-web3.js ~/filename1 ~/filename2
```

> ### MULTIPLE FILES
> You can upload a whole directory full of files at once by giving the script the path to a local directory. You can also upload multiple files by passing in more than one file path when you run the script.

The command will output a CID:
```
Content added with CID: bafybeig7sgl52pc6ihypxhk2yy7gcllu4flxgfwygp7klb5xdjdrm7onse
```

Make a note of the CID, which looks like `bafyb....` You'll need it in order to get your file.

## Get your file
You've already done the most difficult work in this guide — getting your files from Web3.Storage is simple.

- Go to https://dweb.link/ipfs/YOUR_CID, replacing YOUR_CID with the CID you noted in the last step.
- You should see a link to your file. If you uploaded multiple files at once, you'll see a list of all the files you uploaded.
- Click on a file's link to view it in your browser!

<br/>
<p style="border-bottom:dotted 1.62px;">&nbsp;</p>