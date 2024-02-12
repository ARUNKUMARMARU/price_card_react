import React from 'react'
import {plans,features} from './data'
import ReactCardPlan from '../component/plancard'

function pricingcard() {
  return (
    <div className="container">
            <div className="row">
                
                {
                    plans.map((plan,index) => {
                        return <ReactCardPlan key ={index} plan = {plan} features={features} />
                    })
                }
              
            </div>
        </div>
  )
}

export default pricingcard