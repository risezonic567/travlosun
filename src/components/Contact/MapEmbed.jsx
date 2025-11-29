export default function MapEmbed() {
    return (
        <div className="w-full h-[400px]">
            <iframe
                title="TraveloSun Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14011.018579987806!2d77.2089958!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd2dc1b4d7ed%3A0xeec1e98c7df1f4f4!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1686918747634!5m2!1sen!2sin"
                className="w-full h-full border-0 rounded-none"
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    );
}
