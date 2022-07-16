import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Container, Divider, Segment, Button, Icon, Item, Grid, Dropdown, Popup } from 'semantic-ui-react';
import Front from '../components/ipadFront';

export default function Cart () {

    const options = [
        { key: 1, text: '1', value: 1 },
        { key: 2, text: '2', value: 2 },
        { key: 3, text: '3', value: 3 },
        { key: 4, text: '4', value: 4 },
        { key: 5, text: '5', value: 5 },
        { key: 6, text: '6', value: 6 },
        { key: 7, text: '7', value: 7 },
        { key: 8, text: '8', value: 8 },
        { key: 9, text: '9', value: 9 },
        { key: 10, text: '19', value: 10 },
      ]

    return (
        <>
            <Head>
                <title>Bag - Apple</title>
                <meta name="description" content="apple, ipad" />
            </Head>
            <Container style={{ marginBottom: '92px' }}>
                <Divider />
                <div style={{ fontSize: '17px', fontWeight: '600', lineHeight: '25px', paddingTop: '20px', textAlign: 'left' }}>
                    <b>10.9-inch iPad Air</b>
                </div>
                <div style={{  fontSize: '14px', fontWeight: '400', lineHeight: '20px', textAlign: 'left', paddingTop: '20px' }}> 
                    Order today. Delivers to <a style={{ color: 'rgb(0, 113, 227)', cursor: 'pointer' }}>91351</a>
                </div>
                <div style={{  fontSize: '14px', fontWeight: '600', lineHeight: '20px', textAlign: 'left' }}>
                    <b>Jul 13 - Jul 20 - Free</b>
                </div>
                <div style={{  fontSize: '14px', fontWeight: '400', lineHeight: '20px', textAlign: 'left', paddingTop: '16px' }}>
                    Order now. Pick up, in store:
                </div>
                <div style={{  fontSize: '14px', lineHeight: '20px', textAlign: 'left' }}>
                    <b style={{ fontWeight: '600' }}>Thu, Jul 21</b> at <a style={{ color: 'rgb(0, 113, 227)', cursor: 'pointer' }}>Apple Union Square</a>
                </div>
            </Container>
            <Container style={{ padding: '0px 4% 0px 4%' }}>
            <div style={{ padding: '0px 13.5px 0px 13.5px' }}>
                <div style={{ fontSize: '40px', fontWeight: '600',  lineHeight: '44px', paddingBottom: '2px' }}>
                    Review your bag.
                </div>
                <div style={{ fontSize: '17px', fontWeight: '400', lineHeight: '25px', marginTop: '13px' }}>
                    Free delivery and free returns.
                </div>
                <Segment style={{ background: '#53687210', border: 'transparent', borderRadius: '12px', marginTop: '57px' }}>
                    <center style={{ fontSize: '14px', fontWeight: '400', padding: '6px 10px 6px 50px', textAlign: 'left', lineHeight: '20px', width: '100%' }}>
                        <div style={{ transform: 'translate(-27px, 0px) scale(0.2)', position: 'absolute' }}>
                            <div style={{ width: '100px', height: '100px', background: 'radial-gradient(farthest-corner at 0px 80px, violet 15%, orange 35%, lightgreen 70%, yellow 100%)', position: 'absolute', borderRadius: '10px', zIndex: '0', opacity: '0.8' }} />
                            <Icon
                                name="apple"
                                size="huge"
                                style={{ position: 'absolute', zIndex: '1', color: 'white', transform: 'translate(17px, 20px)' }}
                            />
                        </div>
                        Pay $49.91/mo. at 0% APR for eligible items in your order when you choose Apple Card Monthly Installments at checkout.  
                        <a style={{ color: 'rgb(0, 113, 227)', cursor: 'pointer' }}>
                            &nbsp;Learn more
                        </a>
                    </center>
                </Segment>
                <Grid style={{ marginTop: '-16px' }}>
                    <Grid.Column style={{ width: '30%' }}>
                        <div style={{ transform: 'scale(0.385) translate(-20px, -260px)', display: 'flex', justifyContent: 'center'  }}>
                            <Front />
                        </div>
                    </Grid.Column>
                    <Grid.Column style={{ width: '70%' }}>
                        <Grid.Row style={{ display: 'flex', justifyContent: 'space-between', fontSize: '24px', fontWeight: '600', lineHeight: '28px', overflowWrap: 'break-word', textAlign: 'left', marginTop: '58px' }}>
                            <div>
                                10.9-inch iPad Air Wi-Fi 64GB - Space Gray
                            </div>
                            <Dropdown
                                placeholder='1'
                                openOnFocus
                                selection
                                compact
                                options={options}
                                style={{ fontSize: '24px', fontWeight: '600', border: 'transparent', color: 'black', transform: 'translateY(-17px)' }}
                            />
                            <div>
                                $599.00
                            </div>
                        </Grid.Row>
                        <Grid.Row style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: '400', lineHeight: '20px', paddingRight: '20px', marginTop: '6px' }}>
                            <div>
                                Pay 0% APR for 12 months: 
                            </div>
                            <div style={{ transform: 'translateX(40px)', paddingRight: '19px' }}>
                                $49.91/mo.
                            </div>
                        </Grid.Row>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', color: 'rgb(0, 102, 204)', fontSize: '17px', fontWeight: '400', cursor: 'pointer', marginTop: '19px' }}>
                            <a>Remove</a>
                        </div>
                        <Divider style={{ marginTop: '29px' }} />
                        <Grid.Row>
                            <Grid.Column style={{ width: '10%' }}>
                                <Icon
                                    name="apple"
                                    color="red"
                                    style={{ transform: 'translate(-28px, 7px) scale(1.1)' }}
                                />
                            </Grid.Column>
                            <Grid.Column style={{ width: '90%' }}>
                                <Grid.Row>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '17px', fontWeight: '600', lineHeight: '25px', transform: 'translateY(-15px)' }}>
                                        <div>
                                            Add AppleCare+ for iPad Air (5th generation) for $79.00
                                        </div>
                                    </div>
                                    <div style={{ position: 'absolute', color: 'rgb(0, 102, 204)', cursor: 'pointer', fontWeight: '400',  fontSize: '17px', lineHeight: '25px', right: '14px', transform: 'translateY(-39.8px)' }}>
                                        Add
                                    </div>
                                </Grid.Row>
                                <Grid.Row>
                                    <div style={{ fontSize: '14px', fontWeight: '400', lineHeight: '20px', marginTop: '-11px', marginBottom: '1.5px' }}>
                                        Protect your iPad, Apple Pencil, and Apple-branded keyboard from accidental drops and spills with AppleCare+.
                                    </div>
                                </Grid.Row>
                                <Grid.Row>
                                    <div>
                                        <a style={{ color: 'rgb(0, 102, 204)' }}>
                                            Learn more {'>'}
                                        </a>
                                    </div>
                                </Grid.Row>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider style={{ transform: 'translate(-14px, 9px)', width: '100%', marginBottom: '23.5px' }} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', height: '38px', fontSize: '17px', fontWeight: '600', lineHeight: '25px', transform: 'translateY(6px)' }}>
                                <div>
                                    <div style={{ transform: 'translate(-28.5px, -448.5px) scale(0.62)', opacity: '0.85', position: 'fixed' }}>
                                        <div style={{ transform: 'translate(-10px, 720px)', border: '2px solid black', width: '30px', height: '30px', borderRadius: '50%' }}>
                                            <div style={{ transform: 'translate(2.9px, 9.2px)', width: '20px', height: '1px', border: '1px solid black', borderRadius: '50px' }} />
                                            <div style={{ transform: 'translate(5.9px, 13.8px)', width: '14.5px', height: '1px', border: '1px solid black', borderRadius: '50px' }} />
                                        </div>
                                    </div>
                                    Add free engraving
                                </div>
                                <div style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer', fontWeight: '400' }}>
                                    Add
                                </div>
                            </div>
                        <Divider />
                            <div style={{ display: 'flex', justifyContent: 'space-between', height: '38px', fontSize: '17px', fontWeight: '600', lineHeight: '25px', transform: 'translateY(6px)' }}>
                                <div>
                                    <Icon
                                        name="gift"
                                        style={{ transform: 'translate(-29.735px) scale(1.1)', position: 'fixed' }}
                                    />
                                    Add a gift message
                                </div>
                                <div style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer', fontWeight: '400' }}>
                                    Add
                                </div> 
                            </div>
                        <Divider />
                        <Grid>
                            <Grid.Column style={{ width: '50%' }}>
                                <div style={{  fontSize: '14px', fontWeight: '400', lineHeight: '20px', textAlign: 'left', paddingTop: '7px' }}> 
                                    <div style={{ position: 'absolute', border: '5px solid black', width: '100px', height: '100px', borderRadius: '10px', transform: 'translate(-69.7px, -39.5px) scale(0.16)' }}>
                                        <div style={{ position: 'absolute', border: '5px solid black', width: '60px', height: '35px', borderRadius: '150px 150px 0 0', transform: 'translate(14.5px, -35px)' }} />
                                        <Icon
                                            name="apple"
                                            style={{ transform: 'translate(36px, 23px) scale(4)' }}
                                        />
                                    </div>
                                    Order today. Delivers to <a style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}>91351&nbsp;</a>
                                    <b style={{ fontWeight: '600'}}>Jul 13 - Jul 20 - Free</b>
                                </div>
                            </Grid.Column>
                            <Grid.Column style={{ width: '50%' }}>
                                <div style={{  fontSize: '14px', fontWeight: '400', lineHeight: '20px', textAlign: 'left', paddingTop: '7px' }}>
                                    <div style={{ transform: 'translate(-21.2px, -34.45px) scale(0.55, 0.5)', position: 'absolute' }}>
                                        <div style={{ width: '2px', height: '18px', background: 'black', transform: 'translate(7px, -13px) rotate(60deg)', borderRadius: '10px' }} />
                                        <div style={{ width: '2px', height: '18px', background: 'black', transform: 'translate(-7px, -14px) rotate(-60deg)', borderRadius: '10px' }} />
                                        <div style={{ width: '2px', height: '18px', background: 'black', transform: 'translate(7px, -32px) rotate(60deg)', borderRadius: '10px' }} />
                                        <div style={{ width: '2px', height: '18px', background: 'black', transform: 'translate(-7px, -67px) rotate(-60deg)', borderRadius: '10px' }} />
                                        <div style={{ width: '2px', height: '18px', background: 'black', transform: 'translate(0px, -72px) rotate(0deg)', borderRadius: '10px' }} />
                                        <div style={{ width: '2px', height: '18px', background: 'black', transform: 'translate(14px, -98px) rotate(0deg)', borderRadius: '10px' }} />
                                        <div style={{ width: '2px', height: '18px', background: 'black', transform: 'translate(-14px, -116px) rotate(0deg)', borderRadius: '10px' }} />
                                        <div style={{ width: '2px', height: '18px', background: 'black', transform: 'translate(-6px, -147.5px) rotate(60deg)', borderRadius: '10px' }} />
                                        <div style={{ width: '2px', height: '18px', background: 'black', transform: 'translate(7px, -165.5px) rotate(-60deg)', borderRadius: '10px' }} />
                                        <div style={{ width: '2px', height: '17px', background: 'black', transform: 'translate(0px, -179px) rotate(-60deg)', borderRadius: '10px' }} />
                                    </div>
                                    Order now. Pick up, in store: <b style={{ fontWeight: '600' }}>Thu, Jul 21</b> at <a style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}>Apple Union Square</a>
                                </div>
                            </Grid.Column>
                        </Grid>
                        <Divider style={{ marginTop: '82px', marginBottom: '38px', width: '147%', transform: 'translate(-32%)', display: 'flex', justifyContent: 'flex-start' }} />
                        <div style={{ lineHeight: '29.8px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '17px', fontWeight: '400' }}>
                                <div>
                                    Subtotal
                                </div>
                                <div>
                                    $$$
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '17px', fontWeight: '400' }}>
                                <div>
                                    Shipping
                                </div>
                                <div>
                                    $$$
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '17px', fontWeight: '400' }}>
                                <div>
                                    <Popup 
                                        content='The sales tax listed on the checkout page is only an estimate. Your invoice will contain the final sales tax, including state and local taxes, as well as any applicable rebates or fees. In California and Rhode Island, sales tax is collected on the unbundled price of iPhone.' 
                                        trigger={<Icon
                                                    name="question circle"
                                                    style={{ transform: 'translate(-29.5px, .7px)', position: 'absolute', cursor: 'pointer', color: 'gray' }}
                                                />} 
                                        style={{ background: '#e8e8ed', fontSize: '14px', fontWeight: '400', lineHeight: '18px', marginTop: '6px', borderRadius: '10px' }}
                                    />
                                    
                                    Estimated tax for: 
                                    <a style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}>
                                        &nbsp;91351
                                    </a>
                                </div>
                                <div>
                                    $$$
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '17px', fontWeight: '400' }}>
                                <div>
                                    CA recycling fee <a style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}>Learn more</a>
                                </div>
                                <div>
                                    $$$
                                </div>
                            </div>
                            <Divider />
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '24px', fontWeight: '600', lineHeight: '28px', textAlign: 'left', transform: 'translateY(2px)' }}>
                                <div>
                                    Total
                                </div>
                                <div>
                                    $$$
                                </div>
                            </div>
                            <div style={{ position: 'absolute', right: '14.5px' }}>
                                <a style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}>Get Daily Cash with Apple Card</a>
                            </div>
                        </div>
                        <div style={{ fontSize: '24px', fontWeight: '600', lineHeight: '28px', paddingBottom: '23px', paddingTop: '89px', textAlign: 'left' }}>
                            How would you like to check out?
                        </div>
                        <div style={{ display: 'inline-block', marginBottom: '425px', marginTop: '15px', transform: 'scale(0.954)' }}>
                            <Item style={{ width: '355px', maxWidth: '355px', minWidth: '200px', height: '360px', background: '#53687210', borderRadius: '12px', padding: '24px 32px 28px 32px', position: 'fixed', transform: 'translate(0px)', marginRight: '13.5px' }}>
                                <center style={{ fontSize: '24px', fontWeight: '500', lineHeight: '30.5px', marginBottom: '4px', marginTop: '16px' }}>
                                    <div>
                                        Pay Monthly
                                    </div>
                                    <div>
                                        with Apple Card
                                    </div>
                                    <div>
                                        $49.91/mo. at 0% APR
                                    </div>
                                </center>
                                <Button style={{ width: '300px', background: 'rgb(0, 113, 227)', color: 'white', borderRadius: '12px', fontSize: '17px', fontWeight: '400', lineHeight: '20px', padding: '20px 31px 20px 31px', marginTop: '19px' }}>
                                    <div>
                                        Check Out with Apple Card
                                    </div>
                                    <div>
                                        Monthly Installments
                                    </div>
                                </Button>
                                <center style={{ marginTop: '9px' }}>
                                    <div>
                                        $55.66 due today, which includes
                                    </div>
                                    <div>
                                        applicable full-price items, down
                                    </div>
                                    <div>
                                        payments, shipping, and taxes.
                                    </div>
                                </center>
                            </Item>
                            <Item style={{ width: '355px', maxWidth: '355px', minWidth: '200px', height: '360px', background: '#53687210', borderRadius: '12px', padding: '38px 32px 28px 28px', fontSize: '24px', fontWeight: '500', lineHeight: '30.5px', textAlign: 'center', marginRight: '35.5px', marginTop: '2px', position: 'fixed', transform: 'translate(370px, -2px)' }}>
                                <div style={{ marginTop: '2px' }}>
                                    <div>
                                        Pay in Full
                                    </div>
                                    <div>
                                        $654.66
                                    </div>
                                    <Button style={{ width: '300px', height: '58px', background: 'rgb(0, 113, 227)', color: 'white', borderRadius: '12px', fontSize: '17px', fontWeight: '400', lineHeight: '20px', padding: '18px 31px 18px 31px', marginTop: '53.5px' }}>
                                        Check Out
                                    </Button>
                                </div>
                            </Item>
                        </div>
                    </Grid.Column>
                </Grid>
            </div>
            </Container>
            <div style={{ height: '69px' }}>
                <Divider />
                    <div style={{  fontSize: '17px', fontWeight: '400', lineHeight: '25px', transform: 'translateY(5px)', display: 'flex', justifyContent: 'center' }}>
                        Need some help? <a style={{ color: 'rgb(0, 113, 227)', cursor: 'pointer' }}>&nbsp;Chat now&nbsp;</a> or call 1-800-MY-APPLE.
                    </div>
                <Divider style={{ transform: 'translateY(12px)' }} />
            </div>
        </>
    );
}
