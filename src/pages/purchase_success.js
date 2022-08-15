import React from 'react';
import * as Icon from 'react-feather';
import { Purchasesignup } from '../components/Common/mail_signup_purchase';

const ComingSoon = () => {
	const [days, setDays] = React.useState('');
    const [hours, setHours] = React.useState('');
    const [minutes, setMinutes] = React.useState('');
    const [seconds, setSeconds] = React.useState('');

    React.useEffect(() => {
        const interval = setInterval(() => { 
            commingSoonTime();
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    const commingSoonTime = () => {
        let endTime = new Date("August 23, 2022 17:00:00 PDT");
        let endTimeParse = (Date.parse(endTime)) / 1000;
        let now = new Date();
        let nowParse = (Date.parse(now) / 1000);
        let timeLeft = endTimeParse - nowParse;
        let days = Math.floor(timeLeft / 86400); 
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }

    return (
        <div className="coming-soon-area">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="coming-soon-content">
                            <h1>Purchase Successful!</h1>
                            <p>Thanks for purchasing an SEO audit with us today! We aim to have your audit completed and delivered to you via email within 24-48 hours but please give up to 1 week during busy periods.</p><br/>
                            <p>Whilst we have you here, Please feel free to sign up to our newsletter for occasional emails on how to get the most out of your website. (We don't spam)</p>
                            <Purchasesignup />
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default ComingSoon;