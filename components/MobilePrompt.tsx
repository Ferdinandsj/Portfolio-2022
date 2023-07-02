import Image from 'next/image';
export default function MobilePrompt() {
  return (
    <div className="mobilePrompt">
      <h2>Smaller versions of the portofolio is still under construction 🚜</h2>
      <p>
        Please visit the portfolio on your desktop and expand the browser width
      </p>
      <div>
        <Image
          layout="intrinsic"
          alt="Animation of pixelated wave"
          src={
            'https://c.tenor.com/V6viLE6UQPEAAAAC/john-travolta-where-are-you-guys.gif'
          }
          width={498}
          height={247}
        />
      </div>
    </div>
  );
}
