"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7349],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),d=n,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||a;return o?r.createElement(m,i(i({ref:t},u),{},{components:o})):r.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},29980:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const a={},i="EXPLORE AND CONTRIBUTE",l={type:"mdx",permalink:"/Contributors",source:"@site/src/pages/Contributors.md",title:"EXPLORE AND CONTRIBUTE",description:"You can\u2019t simply download the project, make some modifications and upload the changes to an open-source project. There is a specific workflow one should follow when contributing to a project in GitHub. So let's look at the correct way to contribute. We will be using the GitHub first-contributions repository in this tutorial.",frontMatter:{}},s=[{value:"Here, Are the Steps to contribute to the Repository",id:"here-are-the-steps-to-contribute-to-the-repository",level:2},{value:"Step 1: Fork the main repository",id:"step-1-fork-the-main-repository",level:2},{value:"Step 2 - Clone the forked repository to your machine",id:"step-2---clone-the-forked-repository-to-your-machine",level:2},{value:"Step 3 - Create A New Branch",id:"step-3---create-a-new-branch",level:2},{value:"Step 4 - Develop, Stage, and Commit",id:"step-4---develop-stage-and-commit",level:2},{value:"Step 5 - Push the Changes",id:"step-5---push-the-changes",level:2},{value:"Step 6 - Create a Pull Request",id:"step-6---create-a-pull-request",level:2}],c={toc:s},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"explore-and-contribute"},"EXPLORE AND CONTRIBUTE"),(0,n.kt)("p",null,"You can\u2019t simply download the project, make some modifications and upload the changes to an open-source project. There is a specific workflow one should follow when contributing to a project in GitHub. So let's look at the correct way to contribute. We will be using the GitHub first-contributions repository in this tutorial."),(0,n.kt)("h2",{id:"here-are-the-steps-to-contribute-to-the-repository"},"Here, Are the Steps to contribute to the Repository"),(0,n.kt)("h2",{id:"step-1-fork-the-main-repository"},"Step 1: Fork the main repository"),(0,n.kt)("p",null,"Forking will create a copy of the project in your own GitHub account. It allows the users to make any changes to the code while ensuring that these changes do not affect the original repository. Simply click the Fork button on the project repository."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(44805).Z,width:"1796",height:"163"})),(0,n.kt)("p",null,"If the forking is successful, it will create a new repo under your account."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(60109).Z,width:"1717",height:"487"})),(0,n.kt)("h2",{id:"step-2---clone-the-forked-repository-to-your-machine"},"Step 2 - Clone the forked repository to your machine"),(0,n.kt)("p",null,"Next, you need to clone your forked repo to your local machine to develop the project. Click on the Code icon and select your preferred cloning method. Here, we will use the HTTPS link with the git clone command.\nCloning copies the repository files (and commit history) from GitHub to your local machine. The repository will be downloaded into a subdirectory of your working directory, and the subdirectory will have the same name as the repository."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(63900).Z,width:"1828",height:"586"})),(0,n.kt)("p",null,"Run the clone command in your local environment:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"git clone  https://github.com/upsidedownlabs/upsidedownlabs.github.io.git;\n")),(0,n.kt)("h2",{id:"step-3---create-a-new-branch"},"Step 3 - Create A New Branch"),(0,n.kt)("p",null,"While making any change to the code, a best practice is to create a new feature branch for the changes we need to make. This ensures that we keep the master branch clean, and are able to simply revert our code or make updates when necessary."),(0,n.kt)("p",null,"Switch to the directory that was created after you cloned the forked repository:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"cd <new branch name>\n")),(0,n.kt)("p",null,"Create a new feature branch with a name that identifies with the changes you are planning to do. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"git checkout -b new-user-contribution\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(69033).Z,width:"542",height:"48"})),(0,n.kt)("h2",{id:"step-4---develop-stage-and-commit"},"Step 4 - Develop, Stage, and Commit"),(0,n.kt)("p",null,"If you have created any new files as part of your change, you will need to add it to the branch you just created."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"git add <filename>\n")),(0,n.kt)("p",null,"For all the changes made, you have to commit them to the branch. Make sure you add a valid commit message (as per the conventions of the project):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'git commit -m "Add XYZ to filename"\n')),(0,n.kt)("p",null,"Image description"),(0,n.kt)("h2",{id:"step-5---push-the-changes"},"Step 5 - Push the Changes"),(0,n.kt)("p",null,"The committed changes still reside only in your local environment. Therefore, you need to push these changes to the forked GitHub repository in your account. It can be achieved by using the git push command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"git push origin fix-npe-issue\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(44706).Z,width:"800",height:"296"})),(0,n.kt)("p",null,"The workflow from git add, git commit to git push will be similar across all development environments. It is the standard way to deliver changes to any git repository regardless of the provider."),(0,n.kt)("h2",{id:"step-6---create-a-pull-request"},"Step 6 - Create a Pull Request"),(0,n.kt)("p",null,'If pushing is successful, you should see a message indicating the new push with the "Compare and pull request" button when visiting the GitHub repository. Click on that button to make a pull request.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(65914).Z,width:"1207",height:"392"})),(0,n.kt)("p",null,"It will generate a pull request that directly targets the original repository. If you look at the request, you can see that the changes from the new-user-contribution branch of your forked repository will be merged to the master branch of the original repository."),(0,n.kt)("p",null,"It's generally a good practice to leave a comment indicating the changes or the reason for the pull request."),(0,n.kt)("p",null,'Finally, click on the "Create pull request" button to create the request. It will navigate the user to the newly created pull request in the original repository. In this case, the pull request will be created in the first-contributions repository.'))}p.isMDXComponent=!0},44805:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/forkgit-5f998950ad857295079c60a1ce860f45.png"},60109:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/forkgit2-e15a136977c38e648059ce5fad1472f3.png"},69033:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,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"},44706:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/forkgit6-0f563d8503e06bc29151b22d9cef185e.png"},65914:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/forkgit7-3c3ce17270f890709cec4a04bc0c5132.png"},63900:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/newforkimg-eb54503bfb2d33cb2d00af29957856eb.png"}}]);