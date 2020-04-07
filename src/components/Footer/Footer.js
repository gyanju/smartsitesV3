import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="site-footer">
			<div className="footer__top">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12" data-aos="fade-right" data-aos-duration="1000">
							<form action="#" className="form__footer">
								<div className="form-heading text-center">
									<h4 className="h2 font-weight-bold">Get Started</h4>
								</div>
								<div className="form-group icon-user">
									<input type="text" className="form-control" placeholder="Full Name"/>
								</div>
								<div className="form-group icon-envelope">
									<input type="email" className="form-control" placeholder="Email Address"/>
								</div>
								<div className="form-group icon-phone">
									<input type="text" className="form-control" placeholder="Phone Number"/>
								</div>
								<div className="form-group icon-monitor">
									<input type="text" className="form-control" placeholder="Company"/>
								</div>
								<div className="form-group icon-settings-gears multiselect-wrap">
									<select className="form-control js-multiselect" multiple>
										<option value="WEBSITE DESIGN">Website Design &amp; Development</option>
										<option value="SEO">Search Engine Optimization</option>
										<option value="PPC">Pay Per Click Marketing</option>
										<option value="OTHER">Other</option>
									</select>
								</div>
								<div className="form-group icon-round-help-button">
									<textarea className="form-control" cols="30" rows="10"
										placeholder="How can we help you?"></textarea>
								</div>
								<button className="btn btn-primary btn-block" type="submit">Submit</button>
							</form>
						</div>
						<div className="col-lg-6 col-md-12" data-aos="fade-left" data-aos-duration="1000">
							<div className="footer__promo text-white">
								<h4 className="font-weight-light">Ready to speak with a marketing expert? <span
										className="h3 font-weight-semibold d-block">Give us a ring</span></h4>
								<a href="tel:+12014489010" rel="noopener noreferrer"><span className="h3 font-weight-bold">201-448-9010</span></a>
								<ul className="list-unstyled bullet-check h5">
									<li>Leading<span className="font-weight-semibold"> Digital Marketing</span> Agency</li>
									<li><span className="font-weight-semibold">700</span> Websites Launched</li>
									<li><span className="font-weight-semibold">$100M+</span> Client Revenue Generated</li>
								</ul>
								<figure className="footer-partners">
									<img src="images/partners-logos.png" alt="Partners logos"/>
								</figure>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__middle">
				<div className="row no-gutters">
					<div className="col-lg-4" data-aos="fade-right" data-aos-duration="1000">
						<div className="js-footer-testimonial footer__testimonials text-center text-white">
							<blockquote className="slide m-0 blockquote position-relative">
								<p>Mike and his team proved to be an invaluable resource. SmartSites was there to ensure
									that the final product matched our vision perfectly. They take the time to learn
									their clients’ business inside and out, and are a key part of the team every step of
									the way.</p>
								<div className="blockquote-footer text-white">Sharemoney
									<cite title="Source Title" className="font-weight-normal">Steven Taylor</cite>
									<a href="#" className="blockquote-link text-underline" rel="noopener noreferrer">View 100+ More Testimonials</a>
								</div>
							</blockquote>
							<blockquote className="slide m-0 blockquote position-relative">
								<p>Alex really is excellent at marketing and since I have joined, our business has
									tripled this month. He really cares about his clients growth. Being a new business
									growing my business slow and steady with SmartSites is by far one of the wisest
									choices that I have made!</p>
								<div className="blockquote-footer text-white">Lifestyle Directives Group
									<cite title="Source Title" className="font-weight-normal">Shari Wasserman</cite>
									<a href="#" className="blockquote-link text-underline" rel="noopener noreferrer">View 100+ More Testimonials</a>
								</div>
							</blockquote>
							<blockquote className="slide m-0 blockquote position-relative">
								<p>After a nightmare experience with other marketing companies, I finally found a hard
									working group who actually know what they are doing. They handle all of my ads as
									and designed a website. Business has doubled since we started. Looking forward to
									more success.</p>
								<div className="blockquote-footer text-white">Agape Health Wellness Center
									<cite title="Source Title" className="font-weight-normal">Dr. Larry Bennett</cite>
									<a href="#" className="blockquote-link text-underline" rel="noopener noreferrer">View 100+ More Testimonials</a>
								</div>
							</blockquote>
							<blockquote className="slide m-0 blockquote position-relative">
								<p>They did a great job and I noticed the positive results almost immediately. They are
									professional and very pleasant to work with. They had responded to all my emails
									within 1 hour window. I am very happy with the services provided and I highly
									recommend to everyone.</p>
								<div className="blockquote-footer text-white">New Jersey Mediation
									<cite title="Source Title" className="font-weight-normal">Maryana Kanda</cite>
									<a href="#" className="blockquote-link text-underline" rel="noopener noreferrer">View 100+ More Testimonials</a>
								</div>
							</blockquote>
							<blockquote className="slide m-0 blockquote position-relative">
								<p>SmartSites showed me great results fast and now they run Google AdWords, Bing Ads,
									and Facebook Ads for me. SmartSites also manages the website and SEO initiatives. We
									recently expanded our third location and continue to drive appointments through the
									digital marketing.</p>
								<div className="blockquote-footer text-white">Studio Esthetique
									<cite title="Source Title" className="font-weight-normal">Vladimir Byhovsky</cite>
									<a href="#" className="blockquote-link text-underline" rel="noopener noreferrer">View 100+ More Testimonials</a>
								</div>
							</blockquote>
							<blockquote className="slide m-0 blockquote position-relative">
								<p>I had a great experience working with SmartSites and wouldn’t hesitate to recommend
									them. The level of customer service, marketing skills, and efficiency was beyond the
									scope of my expectations!</p>
								<div className="blockquote-footer text-white">Perfect Dashboard
									<cite title="Source Title" className="font-weight-normal">Bartek Jaz</cite>
									<a href="#" className="blockquote-link text-underline" rel="noopener noreferrer">View 100+ More Testimonials</a>
								</div>
							</blockquote>
						</div>
					</div>
					<div className="col-lg-4 bg-cover d-none d-md-block" data-aos="zoom-in" data-aos-duration="1000">
						<img src="images/img-footer-smartsites.jpg" alt="Follow Smartsites"/>
						<div className="d-flex footer__follow h-100">
							<div className="align-self-center">
								<h5 className="h3 follow-us font-weight-semibold">
									<a href="https://www.facebook.com/SmartSites" target="_blank" title="Follow us on"
										className="text-white" rel="noopener noreferrer"><small
                                        className="d-block text-primary font-weight-normal h6">Follow us on</small>
										Facebook</a>
								</h5>
							</div>
						</div>
					</div>
					<div className="col-lg-4 d-none d-md-block" data-aos="fade-left" data-aos-duration="1000">
						<div className="footer__recent-post d-flex h-100 flex-wrap flex-column justify-content-center">
							<div className="heading-wrap">
								<h4>Recent Posts</h4>
								<ul className="footer__breadcrumbs">
									<li>You are here: </li>
									<li><a href="#" rel="noopener noreferrer"><i className="icon-home"></i></a></li>
									<li># Page name</li>
								</ul>
							</div>
							<ul className="recent-post-listings">
								<li>
									<span className="post-date">Posted on December 10, 2018</span>
									<h5><a href="#" rel="noopener noreferrer">Learn How Google Penalizes Websites!</a></h5>
									<a href="#" className="read-more">Read More <i className="icon-arrow-right"></i></a>
								</li>
								<li>
									<span className="post-date">Posted on December 6, 2018</span>
									<h5><a href="#" rel="noopener noreferrer">How To Achieve Shopify Success</a></h5>
									<a href="#" className="read-more">Read More <i className="icon-arrow-right"></i></a>
								</li>
								<li>
									<span className="post-date">Posted on December 2, 2018</span>
									<h5><a href="#" rel="noopener noreferrer">Top Tips To Surviving A Website Migration Procedure</a></h5>
									<a href="#" className="read-more">Read More <i className="icon-arrow-right"></i></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__bottom container-fluid">
				<div className="row">
					<div className="col-lg-8">
						<span className="footer__copyright d-inline-block"> &copy; 2019 <a href="#">SmartSites</a>. All
							Rights Reserved. <a rel="nofollow" href="#" rel="noopener noreferrer">Privacy Policy</a>
						</span>
						<address className="footer-address d-inline-block m-0"> Address: 45 Eisenhower Drive, Suite 520
							Paramus, NJ 07652, Phone: <a href="tel:2014489010" rel="noopener noreferrer">201-448-9010</a>
						</address>
					</div>
					<div className="col-lg-4">
						<ul className="footer__links list-inline">
							<li className="list-inline-item">
								<a href="#" rel="noopener noreferrer">Web Design </a>
							</li>
							<li className="list-inline-item">
								<a href="#" rel="noopener noreferrer">PPC</a>
							</li>
							<li className="list-inline-item">
								<a href="#" rel="noopener noreferrer">SEO</a>
							</li>
							<li className="list-inline-item">
								<a href="#" rel="noopener noreferrer">Our Work</a>
							</li>
							<li className="list-inline-item">
								<a href="#" rel="noopener noreferrer">Company</a>
							</li>
							<li className="list-inline-item">
								<a href="#" rel="noopener noreferrer">Contact Us Test</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
        )
    }
}

export default Footer
