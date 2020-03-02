import React, { Component } from 'react';
import './BackArticle.css';

export class BackArticle extends Component {
	contructor() {
		this.state = {}
	}
  render() {
  	return (
			<section className="brewery_company-page">
          <section className="company_form-left">
            <h1>Company Name</h1>
            <h3>Dog Friendly</h3>
					</section>
					<section className="company_form-right">
					  <section className="company_textarea-container">
				      <textarea className="brewery_company-textarea" rows="12" cols="75">
					    </textarea>
					    <div className="company_button-container">
					      <button className="company_button-submit">Submit Review</button>
					    </div>
					  </section>  
					</section>

			</section>
  		)
  }

}

export default BackArticle;
