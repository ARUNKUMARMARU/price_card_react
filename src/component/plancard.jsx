import React from 'react'

function plancard({plan,features}) {
  return (
    <div>
          <div className="col-lg-4">
            <div style={{paddingLeft:'20px',  flexDirection:'column'}}>
            <div class="card mb-5 mb-lg-0" style={{paddingLeft:'20px',  flexDirection:'row'}}>
                <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">{plan.plan}</h5>
                    <h6 class="card-price text-center">${plan.Fee}<span class="period">/month</span></h6>
                    <hr />
                    <ul class="fa-ul">
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            {
                                plan.plan !== "FREE" ? <strong>{plan.user}</strong> : plan.user
                            }
                            
                        </li>
                        <li><span class="fa-li"><i class="fas fa-check"></i></span>{plan.storage}</li>
                        {
                            features.map((feature,index) => {
                                return <React.Fragment key = {index} >
                                    {
                                        plan.feature_flags[index] !== 0 
                                        ?
                                        <li>
                                            <span class="fa-li"><i class="fas fa-check"></i></span>
                                            {
                                            feature === "Free Subdomain" && plan.plan === "PRO" ?
                                                <><strong>Unlimited</strong> {feature} </>:  feature
                                            }
                                        </li> 
                                        :
                                        <li class="text-muted">
                                            <span class="fa-li"><i class="fas fa-times"></i></span>
                                            {
                                            feature === "Free Subdomain" && plan.plan === "PRO" ?
                                            <><strong>Unlimited</strong> {feature} </> :  feature
                                            }
                                        </li>
                                    }
                                </React.Fragment>
                            })
                        } 
                    </ul>
                    <button class="btn btn-block btn-primary text-uppercase">Button</button>
                </div>
            </div>
            </div>
             <br /> <br /> <br />
        </div>
    </div>
  )
}

export default plancard