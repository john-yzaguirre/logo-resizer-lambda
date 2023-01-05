const { awscdk } = require('projen');

const cdkVersion = '2.59.0';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'john-yzaguirre',
  authorAddress: '113550974+john-yzaguirre@users.noreply.github.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'logo-resizer-lambda',
  repositoryUrl: 'https://github.com/john-yzaguirre/logo-resizer-lambda.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  deps: [
    `@aws-cdk/aws-apigatewayv2-alpha@${cdkVersion}-alpha.0`,
    `@aws-cdk/aws-apigatewayv2-integrations-alpha@${cdkVersion}-alpha.0`,
    `aws-cdk-lib@${cdkVersion}`,
  ],
  stability: 'experimental',
});
project.jest.addTestMatch('**/?(*.)@(spec|test).[tj]s?(x)');
project.synth();