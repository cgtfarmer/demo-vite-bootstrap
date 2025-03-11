// 'use client'

import Container from 'react-bootstrap/Container';
// import LocalStorageClient from '../../client/local-storage-client';
// import LocalStorageAccessor from '../../accessor/local-storage-accessor';
// import CognitoConfigFactory from '../../factory/cognito-config-factory';
// import EnvironmentAccessor from '../../accessor/environment-accessor';
// import DependencyGraph from '../../config/dependency-graph';
// import CognitoConfiguration from '../../config/cognito-configuration/cognito-configuration';

// const environmentAccessor = new EnvironmentAccessor();
// const cognitoConfigFactory = new CognitoConfigFactory(environmentAccessor);
// const cognitoConfiguration = cognitoConfigFactory.create();
// const authClient = new CognitoAuthClient(cognitoConfiguration);

// const localStorageClient = new LocalStorageClient();
// const localStorageAccessor = new LocalStorageAccessor(localStorageClient);

export default function Page() {
  return (
    <Container className="mt-3">
      <p>Hello, world!</p>
    </Container>
  );
};
