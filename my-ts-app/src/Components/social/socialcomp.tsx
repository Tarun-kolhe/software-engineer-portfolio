import type {SocialLink} from '../../Contracts/homecontracts'

type Props = {
  sociallinks: SocialLink[];
  placeholder: string;
};

export function SocialComponent({sociallinks, placeholder }: Props) {
    console.log(placeholder);
    return (
        
        <div className={`home-hero__socials${placeholder}`}>
            {
                 sociallinks.map((social,ind) => {
                    return <div key={ind} className= {`home-hero__social ${placeholder}`}>
                        <a href={social.socialLink} className={`home-hero__social-icon-link ${placeholder}`}>
                            <img src={social.socialImage} alt={social.socialLabel} className={`home-hero__social-icon ${placeholder}`} />
                        </a>
                    </div>
                })

            }

        </div>
    )
}