# siteOximeter

<br/>
// config related to code formatting <br/>


<p>"editor.defaultFormatter": "esbenp.prettier-vscode",</p>
<p>"editor.formatOnSave": true,</p>
  <p>"[javascript]": {</p>
  <p>"editor.formatOnSave": false,</p>
  <p>"editor.defaultFormatter": null</p>
  <p>},</li>
  <p>"editor.codeActionsOnSave": {</p>
  <p>"source.fixAll.eslint": true,</p>
  <p> "source.organizeImports": true</p>
  <p>},</p>
  <p>"eslint.alwaysShowStatus": true</p>



<br/>
<br/>

Install Dev Dependencies <br/>
<p>yarn add -D eslint prettier<p/>
<p>npx install-peerdeps --dev eslint-config-airbnb-base<p/>
<p>yarn add -D eslint-config-prettier eslint-plugin-prettier<p/>

<br/>
<br/>
<br/>
Create a .eslintrc.json file in the project root and enter the below contents:

{
"extends": ["prettier", "airbnb-base"],
"parserOptions": {
"ecmaVersion": 12
},
"env": {
"commonjs": true,
"node": true
},
"rules": {
"no-console": 0,
"indent": 0,
"linebreak-style": 0,
"prettier/prettier": [
"error",
{
"trailingComma": "es5",
"singleQuote": true,
"printWidth": 100,
"tabWidth": 4,
"semi": true
}
]
},
"plugins": ["prettier"]
}
