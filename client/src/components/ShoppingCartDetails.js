import React from 'react';
import {connect} from 'react-redux';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {withStyles} from '@material-ui/styles';
import {green} from '@material-ui/core/colors';
import clockIcon from '@iconify/icons-flat-color-icons/clock';
import {Icon} from '@iconify/react';
import idCardAlt from '@iconify/icons-vs/id-card-alt';
import moneyBillSolid from '@iconify/icons-la/money-bill-solid';
import baselineVerifiedUser from '@iconify/icons-ic/baseline-verified-user';

const StyledRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600]
        },
    },
    checked: {}
})((props) => <Radio color='default' {...props}/>)

function ShoppingCartDetails() {
    return(
        <section>
            <div className='order-details'>
                <h3>Order Details</h3>
                <h5>Addison, IL</h5>
                <p>852 S. Westgate St., Addison, IL 60101</p>
                <FormControlLabel
                    control={<StyledRadio checked={true} />}
                    label='In Store Pickup'
                />
            </div>
            <div className='things'>
                <h3>Things to Know</h3>
                <div>
                    <Icon icon={clockIcon} style={{fontSize: '4rem'}}/> 
                    <p>Please arrive within 2 hours to secure your purchase, or we may need to release your product if other customers request it. If you can't make it in, please let us know.</p>
                </div>
                
                <div>
                    <Icon icon={idCardAlt} style={{fontSize: '3rem', color: 'green'}}/>
                    <p>You must have a valid driver's license, state ID or passport at check-in</p>
                </div>
                
                <div>
                    <Icon icon={moneyBillSolid} style={{fontSize: '4rem', color: 'green'}}/>
                    <p>We accept debit and cash (ATM on-site) but cannot take credit cards. All discounts are applied in store.</p>
                </div>
                
                <div> 
                    <Icon icon={baselineVerifiedUser} style={{fontSize: '4rem', color: 'green'}}/>
                    <p>Illinois residents 21+ may buy up to 30 grams (a little over 1 ounce of flower), 500mg of THC-infused products (like edibles), and 5 grams of concentrate products (like vape carts or concentrates). Non-residents may purchase half of these daily cumulative amounts.</p>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = state => {
    return {
        shoppingCart: state.shoppingCart
    }
}

export default connect(mapStateToProps, {})(ShoppingCartDetails);