import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white py-12 px-8">
            <div className="container mx-auto max-w-4xl">
                <div className="text-xs leading-relaxed text-gray-700 space-y-6 text-center">
                    <p>
                        *NO PURCHASE NECESSARY. LEGAL RESIDENTS OF THE 50 UNITED STATES (D.C.) 18 AND OLDER AND
                        WHO ARE MEMBERS OF THE STARBUCKS® REWARDS LOYALTY PROGRAM AT THE TIME OF ENTRY.
                        VOID WHERE PROHIBITED. Starbucks Partners (employees) can win certain instant win game prizes
                        but are not eligible to win sweepstakes prizes. Participating stores only. Promotion ends 1/4/26.
                        For <a href="#" className="underline text-[#00754a]">Official Rules</a>, how to enter without purchase, prizes, and odds, visit{' '}
                        <a href="#" className="underline text-[#00754a]">starbucksforlife.com</a>.
                        Sponsor: Starbucks Corporation, 2401 Utah Ave. S, Seattle, WA 98134.
                    </p>

                    <p>
                        Starbucks for Life means the winner will receive a daily credit for 30 years for one free food or
                        beverage item at participating Starbucks® stores in the U.S. Starbucks for a Year will be fulfilled as a
                        daily credit for 365 days for one free food or beverage item at participating Starbucks® stores in the
                        U.S. Excludes alcohol.
                    </p>

                    <p>
                        Prize Plays may be earned on eligible transactions at a participating Starbucks store. Purchases of
                        alcohol and orders placed using Starbucks® Delivers in the Starbucks Mobile App are excluded. See{' '}
                        <a href="#" className="underline text-[#00754a]">starbucks.com/rewards/terms</a> for details.
                    </p>

                    <p>
                        Entrants can receive 1 prize play and 1 sweepstakes entry each week and a maximum of 2 prize
                        plays per day plus bonus opportunities to earn additional plays.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
