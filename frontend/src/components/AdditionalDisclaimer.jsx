import React from 'react';

const AdditionalDisclaimer = () => {
    return (
        <div className="bg-gray-50 py-12 px-8">
            <div className="container mx-auto max-w-4xl">
                <div className="text-xs leading-relaxed text-gray-700 space-y-6 text-center">
                    <p>
                        **For every Crispy Grilled Cheese on Sourdough purchased between December 2, 2025, and
                        January 5, 2026, in participating stores in the US and Canada, Starbucks will donate $0.50 to
                        World Food Program USA (<a href="#" className="underline text-[#00754a]">www.wfpusa.org/starbucks</a>).
                        This donation will be used to support WFP school meal programs globally, and in the U.S. and Canada through No Kid Hungry
                        (<a href="#" className="underline text-[#00754a]">www.nokidhungry.org</a>), to provide up to 12 million meals with a minimum donation of $500,000
                        and a maximum donation of $3M globally ($1.75M U.S. and Canada). WFP does not endorse any
                        product or service.
                    </p>

                    <p>
                        ***Free refills of hot and iced brewed coffee and tea during same store visit. Excludes Cold Brew,
                        Nitro Cold Brew, Iced Tea Lemonade, flavored Iced Tea and Starbucks Refreshers® base. At
                        participating stores.
                    </p>

                    <p>
                        ****Valid for new Starbucks Rewards members for 7 days from sign up. Coupon will be available in
                        the offers tab of your Starbucks app following sign up and may take up to 48 hours to arrive. Good
                        at participating U.S. stores for a handcrafted menu-sized beverage ($8 max value) with qualifying
                        purchase. Qualifying purchase excludes alcohol, Starbucks Card and Starbucks Cards reloads. Limit
                        one. Cannot be combined with other offers or discounts. Excludes delivery services. Sign up by
                        1/5/2026.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdditionalDisclaimer;
