import type { AppProps } from 'next/app'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'

Amplify.configure({
	aws_project_region: 'eu-central-1',
	Auth: {
		region: 'eu-central-1',
		userPoolId: 'eu-central-1_BIdsMLgSn',
		userPoolWebClientId: '1n231b393ibrrd1jlcmbb4v6fb',
		identityPoolId: 'eu-central-1:4e21e0c5-4818-4ea8-b61b-2fd621f7747f',
	},
	Storage: {
		AWSS3: {
			bucket: 'productfilestoragestack-productbucket674e806c-1dp5jbkeuj85q',
			region: 'eu-central-1',
		},
	},
	aws_appsync_graphqlEndpoint:
		'https://g7hio3ov5vfw3hixouz7wbzg6y.appsync-api.eu-central-1.amazonaws.com/graphql',
	aws_appsync_region: 'eu-central-1',
	aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AmplifyProvider>
			<Component {...pageProps} />
		</AmplifyProvider>
	)
}
