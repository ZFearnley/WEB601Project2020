import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'
import NavBar  from '../navBar'

const home = () => {
    return (
        <div id="wrapper">
        <section class="main-home">
		<aside>
			<div class="content premade-home">
				<h3><Link href="preMadeDesignz.js">Pre Made Designz</Link></h3>
				<p>Lorem ipsum dolor sit amet, consect etuer adipiscing elit.
                Morbi commodo, ipsum sed pharetra gravida, ipsum sed pharetra 
				gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.</p>
			</div>
		</aside>
		<aside>
			<div class="content contact-us-home">
				<h3><Link href="contactUs.js">Contact us</Link></h3>
				<p>Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus 
				neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. 
				Lorem ipsum dolor sit amet, consect.</p>
			</div>
		</aside>
		<aside>
			<div class="content create-home">
				<h3><Link href="customDesign.js">Design your own</Link></h3>
				<p>Nullam sit amet enim. Lorem ipsum dolor sit amet, consect etuer 
				adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci 
				rhoncus neque, id pulvinar odio.</p>
			</div>
		</aside>
	</section>
	<section class="SignUp-home">
		<article>
			<h2>Create an account</h2>
			<p>Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, 
			id pulvinar odio lorem non turpis. Lorem ipsum dolor sit amet etuer 
			adipiscing elit. Pulvinar odio lorem non turpis. Nullam sit amet enim 
			lorem.</p>
			<Link class="btn" href="signUp.js" title="Sign up">Sign Up</Link>
		</article>
	</section>
    
    <section class="SignUp-home">
		<article>
			<h2>Create an account</h2>
			<p>Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, 
			id pulvinar odio lorem non turpis. Lorem ipsum dolor sit amet etuer 
			adipiscing elit. Pulvinar odio lorem non turpis. Nullam sit amet enim 
			lorem.</p>
			<Link class="btn" href="signUp.js" title="Sign up">Sign Up</Link>
		</article>
	</section>

    <section class="top-sellers-home">

    <aside>
			<div class="content">
				<img alt="On Point Design" src="images/OnPoint.jpg"/>
				<h4>On point t-shirt & pants combo</h4>
				<p>Consectetuer adipiscing elit. Morbi commodo ipsum sed gravida 
				orci magna rhoncus pulvinar odio lorem.</p>
				<Link href="Cart.html" title="Cart">
				Add to cart</Link> </div>
		</aside>
		<aside>
			<div class="content">
				<img alt="90z Hip Hop Jumper" src="images/90zHipHop.jpg"/>
				<h4>90z hip hop jumper</h4>
				<p>Morbi commodo, ipsum sed pharetra gravida magna rhoncus neque 
				id pulvinar odio lorem non turpis nullam sit amet.</p>
				<Link href="Cart.html" title="Cart">
				Add to cart</Link> </div>
		</aside>
		<aside>
			<div class="content">
				<img alt="Fortnite" src="images/FortniteSet.jpg"/>
				<h4>Fortnite Set</h4>
				<p>Morbi commodo, ipsum sed pharetra gravida magna rhoncus neque 
				id pulvinar odio lorem non turpis nullam sit amet.</p>
				<Link href="Cart.html" title="Cart">
				Add to cart</Link> </div>
		</aside>
    </section>
    </div>
    )
}

export default home
