import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
		<ul>
			<li><Link href="home.js" title="Home">Home</Link>
			</li>
			<li><a aria-haspopup="true" href="preMadeDesigns.js" title="Designs">Pre Made Designz</a>
			<ul>
				<li><Link href="#" title="Boys">Boyz</Link> </li>
				<li><Link href="#" title="Girls">Girlz</Link> </li>
				<li><Link aria-haspopup="true" href="#" title="sales">Dealz</Link>
				<ul>
					<li><Link href="#" title="Boys">Boyz</Link>
					</li>
					<li><Link href="#" title="Girls">Girlz</Link>
					</li>
				</ul>
				</li>
			</ul>
			</li>
			<li><Link aria-haspopup="true" href="customDesigns.js" title="Designs">Design Your Own</Link>
			<ul>
				<li><Link href="#" title="Boys">Boyz</Link> </li>
				<li><Link href="#" title="Girls">Girlz</Link> </li>
			</ul>
            </li>
            <li><Link href="contactUs.js" title="Contact us">Contact us</Link> </li>
            <li><Link aria-haspopup="true" href="#" title="LogIn/SignUp">Log In/Sign Up</Link>
                <ul>
                    <li><Link href="logIn.js" title="Log in">Log In</Link> </li>
                    <li><Link href="signUp.js" title="Sign up">Sign Up</Link> </li>
                </ul>
                </li>
			<li><Link href="cart.js" title="Cart">Cart</Link> </li>
		</ul>
	</nav>
    )
}

export default NavBar; 