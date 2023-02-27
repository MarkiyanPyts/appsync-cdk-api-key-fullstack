import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'

Amplify.configure({
	Auth: {
		region: 'eu-central-1',
		userPoolId: 'eu-central-1_uj9UbcCSm',
		userPoolWebClientId: '4ro1ffehik564sq4t81mpkukq6',
		identityPoolId: 'eu-central-1:9075e625-67f2-4d76-bdfe-d6e7de59c0c8',
	},
	aws_project_region: 'eu-central-1',
	aws_appsync_graphqlEndpoint:
		'https://w53hn3prrfhezjmccl5kvud5lu.appsync-api.eu-central-1.amazonaws.com/graphql',
	aws_appsync_region: 'eu-central-1',
	aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
	aws_appsync_apiKey: 'da2-a6a74qu5k5a6tk2kwx5ebp23ca',
})

function MyApp({ Component, pageProps }) {
	return (
		<AmplifyProvider>
			<Component {...pageProps} />
		</AmplifyProvider>
	)
}

export default MyApp
