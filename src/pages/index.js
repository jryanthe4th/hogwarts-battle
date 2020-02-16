import React from 'react'
import { Link } from 'gatsby'

import '../styles/global.css'
import styled from 'styled-components'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
	<body>
    	<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    	</div>
		<div>
			<HomePageBanner>
				<p id='line1'>Harry Potter</p>
				<p id='line2'>Hogwarts Battle</p>
				<p id='line3'>Defense Against the Dark Arts</p>
			</HomePageBanner>
		</div>
    	{/* <div style={{textAlign: `center`}}>
			<Link to='/page-2/'>Go to page 2</Link>
		</div> */}
	</body>
  </Layout>
)

const HomePageBanner = styled.div`
	margin-top: 30%;
	padding: 20px;
	text-align: center;
	#line1 {
		font-size: 7em;
		padding: 20px;
	}
	#line2 {
		font-size: 5em;
		padding: 20px;
	}
	#line3 {
		font-size: 2em;
	}
`

export default IndexPage
