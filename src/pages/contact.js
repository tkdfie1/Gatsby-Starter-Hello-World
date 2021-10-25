import React from 'react'
import Layout from '../components/Layout'

const Contact = () => {
    return (
      <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
          <h3>Want to get in touch?</h3>
          <p>
          Swag snackwave jianbing taxidermy enamel pin hella paleo beard. Freegan slow-carb affogato, vice pug waistcoat irony. 
          </p>
          <p>Swag snackwave jianbing taxidermy enamel pin hella paleo beard. Freegan slow-carb affogao, vice pug waistcoat irony. 
          </p>
          <p>Trust fund actually tbh hell of bicycle rights distillery migas sriracha. Salvia selfies keytar leggings. 
          </p>
          </article>
          <article>
            <form  className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name"/>
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email"/>
              </div>
              <div className="form-row">
                <label html="message">message</label>
                <textarea name="message" id="message" ></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        
      </main>
      </Layout>
    )
}

export default Contact