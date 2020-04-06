import React, { Component, Fragment } from 'react';
import  Header from './Header/Header';
import  Footer from './Footer/Footer';
import { TitleComponent } from './TitleComponent.js';
import Typed from 'react-typed';
import axios from 'axios';

export class Frontpage extends Component {	
	constructor(props) {
		super(props)
		this.state = {
			typeStr: [],
			bannerLogo: [],
			isLoaded: false
		}
	}	

	componentDidMount() {
		axios.get('https://www.smartsites.com/wp-json/wp/v2/pages/1')
			.then(res => {
				//console.log(res.data);
				//let typedStr = [];
				//for (var i = 0; i < res.data.typed_strings.length; i++) {
					//typedStr.push(res.data.typed_strings[i].text)
				//}
				this.setState({
					typeStr: res.data.typed_strings,
					bannerLogo: res.data.banner_icons.images,
					//typeStr: typedStr,
					isLoaded: true
				})
			})
			.catch(err => console.log(err));
	}
	
	render() {		
		console.log(this.state);

		let banner_logos = [];
		this.state.bannerLogo.map((item, i) => {
			var obj = {};
			obj["id"] = item.image.id; obj["src"] = require(`../images/${item.image.filename}`); obj["title"] = item.image.title;
			banner_logos.push(obj);			
		  });

		//console.log(banner_logos);

		/*const banner_logos = [
			{id:1, src: require('../images/inc-5000-color.svg'), title: 'Inc. 5000'},
			{id:2, src: require('../images/google-partner-badge.svg'), title: 'Premier Google Partner'},
			{id:3, src: require('../images/bing-green-white.svg'), title: 'Bing Elite Agency'},
			{id:4, src: require('../images/bbb-blue.svg'), title: 'BBB Accredited Business A+ rating'},
			{id:5, src: require('../images/nj-biz-red-white.svg'), title: 'TOP 250 NJBIZ'},
			{id:6, src: require('../images/gsa.svg'), title: 'GSA'}
		]*/
		
		return (
            <Fragment>
                <TitleComponent title="SmartSites is an Award Winning Web Design &amp; Digital Marketing Agency" />
                <Header/>
				
                <main id="main" className="site-content">
                <section className="banner">
				<div className="banner__video">
					<video id="video" className="d-block" autoPlay muted
						poster="https://www.smartsites.com/media/video-poster.jpg" style={{width:"100%", objectFit: "fill"}}
						loop>
						<source src="https://www.smartsites.com/media/smartsites-video.webm" type="video/webm"/>
						<source src="https://www.smartsites.com/media/banner-video.mp4" type="video/mp4"/>
					</video>
					<div className="banner__content">
						<h1 data-aos="fade-down" data-aos-duration="1000" className="aos-init aos-animate">
							<span className="font-weight-light d-lg-block">Award Winning</span>
							<span className="font-weight-semibold"> Digital Marketing Agency</span>
						</h1>
						<div className="typed-text btm-margin-md">
							<span className="h6 sm-block d-xs-block"> We are passionate about </span>							
							<Typed
								strings={this.state.typeStr.map(ts => (
									ts.text
								))}
								id="typed"
								className="h6"
								typeSpeed={70}
								backSpeed={50}
								backDelay={500}
								startDelay={1e3}
								loop={!0}
							/>
						</div>
						<form action="#" className="banner__form form__horizontal aos-init aos-animate" data-aos="fade-right"
							data-aos-duration="1000">
							<div className="form-wrap">
								<div className="form-body">
									<div className="row form-step1">
										<div className="col-xl-4">
											<div className="form-group m-0 icon-user">
												<input type="text" className="form-control" placeholder="Full Name"/>
											</div>
										</div>
										<div className="col-xl-4">
											<div className="form-group m-0 icon-envelope">
												<input type="email" className="form-control" placeholder="Email Address"/>
											</div>
										</div>
										<div className="col-xl-4">
											<div className="form-group m-0 icon-phone">
												<input type="text" className="form-control" placeholder="Phone Number"/>
											</div>
										</div>
									</div>
									<div className="row form-step2" style={{display: "none"}}>
										<div className="col-xl-4">
											<div className="form-group m-0 icon-monitor">
												<input type="text" className="form-control" placeholder="Company"/>
											</div>
										</div>
										<div className="col-xl-4">
											<div className="form-group m-0 icon-settings-gears multiselect-wrap">
												<select className="form-control js-multiselect" multiple>
													<option value="WEBSITE DESIGN">Website Design &amp; Development
													</option>
													<option value="SEO">Search Engine Optimization</option>
													<option value="PPC">Pay Per Click Marketing</option>
													<option value="OTHER">Other</option>
												</select>
											</div>
										</div>
										<div className="col-xl-4">
											<div className="form-group m-0 icon-round-help-button">
												<textarea className="form-control" cols="30" rows="10"
													placeholder="How can we help you?"></textarea>
											</div>
										</div>
									</div>
								</div>
								<div className="form-footer">
									<button className="btn btn-primary no-arrow" type="submit">Get Started</button>
								</div>
							</div>
						</form>
						<div className="banner__logos aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
							{ banner_logos.map(({id, src, title}) => 
								<figure className="img-wrap d-inline-block m-0" key={id}>
									<img src={src} alt={title}/>
								</figure>
							)}
						</div>
					</div>
				</div>
			</section>
                </main>
                <Footer/>
                <hr />
            </Fragment>
        )
    }
}

export default Frontpage
