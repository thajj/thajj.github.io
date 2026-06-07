DONE

- custom theme font montserrat

TODO:

- i8n
- menu :<https://ui.mantine.dev/category/toc> /  slieshow
- cookie mantine
- dark theeme
- REMOVE DEBUG IN I18n.ts   debug: true,
- implement the send contact form with bad-word
- modal contact me : <https://tailwindcomponents.com/component/modal-card-project>

- FOR NOW we rollback from footer.tsx to footer.jsx :
  - need to declare the  i18n file: <https://www.i18next.com/overview/typescript#create-a-declaration-file>

function MyAwesomeThemeComponent() {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  React.useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <label className="swap swap-rotate">
      <input onClick={toggleTheme} type="checkbox" />
      <div className="swap-on">DARKMODE</div>
      <div className="swap-off">LIGHTMODE</div>
    </label>
  );
}

- router
- commit
- upload resume pdf with no personal info

- SuperSEO legend + openGraph, twitter...
openGraph={{
          ogImage: {
            ogImage: "<http://placekitten.com/1200/630>",
            ogImageAlt: "Kittens",
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: "image/jpeg",
          },
        }}
        twitter={{
          twitterSummaryCard: {
            summaryCardImage: "<http://placekitten.com/1200/630>",
            summaryCardImageAlt: "Kittens",
            summaryCardSiteUsername: t('fullName'),

          },
        }}

- FIX i18n local storage

- Remove default from i18n

   "prettier": "prettier ./src/*--write",
 "format:write": "prettier --write \"**/*.{css,js,json,jsx,ts,tsx}\"",
    "format": "prettier \"**/*.{css,js,json,jsx,ts,tsx}\"",
  
____________________________
CURSOR EFFECT:
the best one : <https://javascript.plainenglish.io/the-power-of-custom-cursors-for-web-design-4a11b272c3cd>
  // <https://codesandbox.io/s/custom-cursor-with-blend-mode-exclusion-forked-3c3p5d?file=/src/styles.css>
// <https://codepen.io/Lomzo/pen/qBBROLm>
scroll hori to verti :<https://dev.to/shakuroinc/framer-motion-new-and-underestimated-features-35a4>
LATER

- <https://codesandbox.io/s/app-store-ui-using-react-and-framer-motion-ecgc2?file=/src/index.tsx>
- add prettier in dev dep

   "prettier:check": "prettier --check \"**/*.{ts,tsx}\"",
    "prettier:write": "prettier --write \"**/*.{ts,tsx}\"",
    "test": "npm run prettier:check && npm run lint && npm run typecheck && npm run jest",
    "storybook": "start-storybook -p 7001",
    "storybook:build": "build-storybook"
<https://github.com/mantinedev/next-pages-template/blob/master/package.json>

COOKIE example : with notification
<https://github.com/mantinedev/next-pages-template/blob/master/pages/_app.tsx>

FOOTER____________________________
<https://tailwindcomponents.com/component/advanced-footer>

LAYOUT 2 CARD____________________________
<https://tailwindcomponents.com/component/pricing-cards>

USER CARD ____________________________
<https://tailwindcss.com/docs/max-width#reading-width>

            {/* <!-- <p>A decade+ innovating commercial solutions across software types, excelling in large system architecture. 100+ successful projects for smart cities, governments, academia, libraries, museums, and public/private sectors.</p> -->
          <!-- <p>Cumulant plus de 10 ans d'expérience dans le développement de solutions commerciales novatrices à travers divers types de logiciels, je possède une expertise avérée dans l'élaboration d'architectures de systèmes de grande envergure. J'ai mené à bien plus de 100 projets à ce jour, couvrant des domaines variés tels que les villes intelligentes, les institutions gouvernementales, le secteur académique, les bibliothèques, les musées, les institutions culturelles ainsi que des entreprises tant publiques que privées.</p> -->
          <!-- <p>10+ of experience building innovative commercial solutions in
            various type of software with proven experience in making large
            system architecture.
            Successfully executed over 100 projects to date for smart cities,
            governments, the academic sector, libraries, museums, cultural
            institutions, public and privately owned companies.</p> --> */}

Highly‎‏‏‎ skilled and adaptable software developer with a diverse range of technical expertise. Proficient in building scalable applications using NodeJS, ReactJS, and TypeScript, with a strong background in front-end frameworks like Redux and Vue. Knowledgeable in relational database management systems such as Postgres and experienced in microservice architecture and cloud technologies.
‎
Passionate about delivering exceptional customer experiences and advocating for continuous improvement in software development processes. A detail-oriented and dedicated professional, I thrive in fast-paced environments, consistently meeting deadlines without compromising on quality. A collaborative and approachable team player, I actively seek feedback and diverse perspectives to foster effective teamwork.‏‏‎‏‎
‎
Curious and proactive, I constantly pursue new challenges and opportunities to expand my knowledge. With a goal-driven mindset and excellent communication skills, I actively engage in discussions and contribute valuable insights. Committed to personal and professional growth, I remain adaptable to evolving technologies and methodologies.‎‎

________________________________________
✋ Greetings! I'm an accomplished senior software developer with over a decade of professional experience in full stack development.

✅ Technical Skills:
My technical stack of choice is likely to be dynamic and varied but I have developed a notable affinity for React and its intricate ecosystem.

⚙️ Services provided:
Web, Mobile and desktop development.
API integration.
Bug fixes and troubleshooting of existing applications.

🤙 Do not hesitate to contact me to discuss your needs and project.
_______________________________________________________

MEDIUM ARTICLE

- part 1 CRA
- part 2 Add tailwind
- page 3 add framer motion
- <https://stackoverflow.com/questions/74190609/exit-animations-with-animatepresence-framer-motion-and-createbrowserrouter-r>

  <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="101"
            viewBox="0 0 92 101"
            fill="none"
          >
            <path
              d="M41.7341 1.36398C44.2136 -0.0552934 47.4432 -0.0617042 49.9206 1.36398C62.3842 8.40656 74.8517 15.4381 87.3132 22.485C89.657 23.8052 91.2248 26.4137 91.2009 29.1144V71.4853C91.2184 74.2978 89.4957 76.9686 87.0229 78.2589C74.6003 85.2627 62.184 92.275 49.7635 99.2788C47.2327 100.726 43.9383 100.614 41.4865 99.0487C37.7622 96.8897 34.0315 94.7414 30.3069 92.5845C29.5458 92.1308 28.6878 91.7696 28.1504 91.0317C28.6255 90.3913 29.4749 90.3115 30.1651 90.032C31.7197 89.5376 33.1476 88.7441 34.5757 87.9741C34.9369 87.7269 35.3778 87.8217 35.724 88.0428C38.9087 89.8688 42.0653 91.7479 45.2607 93.5564C45.9424 93.95 46.6326 93.4275 47.2153 93.1027C59.4057 86.2129 71.6111 79.3491 83.7994 72.4572C84.251 72.24 84.5006 71.7606 84.4639 71.2659C84.4725 57.2886 84.4661 43.3089 84.4682 29.3316C84.5199 28.7703 84.195 28.2543 83.6875 28.0246C71.308 21.0529 58.9349 14.0705 46.5575 7.09698C46.343 6.94955 46.089 6.87045 45.8287 6.87007C45.5685 6.86969 45.3142 6.94804 45.0994 7.09484C32.722 14.0705 20.351 21.0593 7.97356 28.0306C7.46782 28.2607 7.12841 28.7682 7.1886 29.3316C7.19074 43.3089 7.1886 57.2886 7.1886 71.268C7.16714 71.5094 7.22015 71.7515 7.3405 71.9619C7.46085 72.1722 7.64276 72.3406 7.86173 72.4444C11.1647 74.3174 14.4719 76.1772 17.777 78.0438C19.639 79.046 21.9252 79.6415 23.9766 78.8737C25.7869 78.2244 27.0559 76.377 27.0214 74.4549C27.0385 60.5592 27.0128 46.6614 27.0342 32.7678C26.989 32.151 27.5741 31.6413 28.1739 31.6994C29.7609 31.6887 31.3501 31.678 32.9371 31.7036C33.5995 31.6887 34.0554 32.3529 33.9735 32.9744C33.9671 46.958 33.9906 60.942 33.9628 74.9257C33.9671 78.6525 32.436 82.7077 28.9888 84.5312C24.742 86.7311 19.493 86.2646 15.2975 84.1551C11.6654 82.3422 8.19936 80.2028 4.63177 78.2607C2.15259 76.9775 0.438421 74.296 0.455873 71.4856V29.1144C0.429874 26.3578 2.05999 23.7019 4.47685 22.4009C16.8973 15.3914 29.3157 8.37664 41.7341 1.36398Z"
              fill="#8CC84B"
            />
            <path
              d="M52.5697 30.7145C57.9868 30.3659 63.786 30.508 68.6607 33.1766C72.4348 35.2216 74.5272 39.5137 74.5938 43.7067C74.4884 44.2722 73.8972 44.5842 73.3573 44.5454C71.7856 44.5433 70.2135 44.5668 68.6418 44.5347C67.9751 44.5603 67.5876 43.9456 67.5039 43.3562C67.0523 41.35 65.9582 39.363 64.0699 38.3953C61.1711 36.944 57.8101 37.017 54.6492 37.0473C52.3417 37.1698 49.8604 37.3696 47.9055 38.7266C46.4046 39.7544 45.9488 41.8294 46.4844 43.5004C46.9895 44.7003 48.3745 45.0875 49.5078 45.4443C56.0361 47.1517 62.954 46.9818 69.3577 49.2288C72.0089 50.1448 74.6024 51.9256 75.5099 54.7015C76.6969 58.4218 76.1766 62.8688 73.5297 65.8555C71.3831 68.3133 68.2568 69.651 65.1387 70.3776C60.9906 71.3025 56.6857 71.326 52.4731 70.9154C48.512 70.4638 44.3899 69.4231 41.332 66.7241C38.7171 64.4537 37.4399 60.916 37.5667 57.5015C37.597 56.9249 38.1711 56.5228 38.7235 56.5702C40.3062 56.5574 41.889 56.5531 43.4717 56.5723C44.1039 56.5271 44.5726 57.0734 44.605 57.6693C44.8971 59.5808 45.6154 61.587 47.2822 62.7203C50.499 64.7956 54.5353 64.6535 58.2186 64.7115C61.2701 64.5762 64.6956 64.5352 67.1858 62.5183C68.4997 61.3679 68.889 59.4433 68.5339 57.7875C68.1492 56.3896 66.6869 55.7382 65.4311 55.3123C58.9865 53.2736 51.9913 54.0134 45.609 51.708C43.018 50.7923 40.5124 49.0611 39.517 46.3992C38.128 42.6318 38.7644 37.9719 41.6888 35.086C44.5402 32.2154 48.6562 31.1099 52.5697 30.7142V30.7145Z"
              fill="#8CC84B"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="101"
            viewBox="0 0 92 101"
            fill="strock"
          >
            <g clipPath="url(#clip0_304_13282)">
              <path
                d="M41.7334 1.36702C42.9845 0.666301 44.3944 0.29834 45.8284 0.29834C47.2623 0.29834 48.6723 0.666301 49.9234 1.36702C62.3834 8.40702 74.8467 15.447 87.3134 22.487C88.4844 23.1561 89.4597 24.1202 90.1422 25.2834C90.8247 26.4467 91.1906 27.7684 91.2034 29.117V71.487C91.1854 72.8936 90.7875 74.2691 90.0516 75.4679C89.3158 76.6668 88.2694 77.6443 87.0234 78.297L49.7634 99.297C48.4836 100.006 47.0364 100.357 45.574 100.313C44.1117 100.269 42.6882 99.8316 41.4534 99.047C37.7334 96.887 34.0067 94.7337 30.2734 92.587C29.4565 92.2164 28.722 91.686 28.1134 91.027C28.5934 90.387 29.4434 90.307 30.1134 90.027C31.6424 89.499 33.1188 88.8294 34.5234 88.027C34.6989 87.9187 34.9036 87.8672 35.1095 87.8798C35.3153 87.8923 35.5123 87.9682 35.6734 88.097C38.8534 89.917 42.0134 91.797 45.2134 93.607C45.8934 93.997 46.5834 93.477 47.1634 93.157C59.3567 86.237 71.5667 79.337 83.7934 72.457C84.0059 72.3507 84.182 72.1837 84.2995 71.9772C84.417 71.7707 84.4706 71.534 84.4534 71.297C84.4534 57.297 84.4534 43.297 84.4534 29.297C84.4757 29.026 84.4124 28.7548 84.2725 28.5215C84.1326 28.2883 83.923 28.1049 83.6734 27.997L46.5534 7.09702C46.3398 6.94652 46.0847 6.86614 45.8234 6.86702C45.5624 6.86807 45.3078 6.94827 45.0934 7.09702C32.7267 14.0704 20.3534 21.047 7.97337 28.027C7.72607 28.1304 7.51711 28.3082 7.37553 28.5358C7.23395 28.7634 7.16679 29.0295 7.18337 29.297C7.18337 43.297 7.18337 57.277 7.18337 71.237C7.16241 71.4769 7.21471 71.7175 7.33337 71.927C7.45801 72.1389 7.64236 72.3094 7.86337 72.417L17.7734 78.017C18.6912 78.5815 19.7173 78.947 20.7853 79.09C21.8533 79.2329 22.9394 79.1502 23.9734 78.847C24.8707 78.5076 25.6433 77.9027 26.1882 77.1131C26.7331 76.3234 27.0244 75.3864 27.0234 74.427C27.0234 60.527 27.0234 46.627 27.0234 32.737C27.0113 32.5873 27.0331 32.4368 27.0872 32.2967C27.1413 32.1565 27.2262 32.0304 27.3358 31.9276C27.4453 31.8248 27.5766 31.748 27.7198 31.7029C27.8631 31.6578 28.0147 31.6455 28.1634 31.667C29.7534 31.667 31.3334 31.667 32.9234 31.667C33.0747 31.6789 33.222 31.722 33.3559 31.7937C33.4898 31.8653 33.6074 31.9638 33.7014 32.0831C33.7953 32.2024 33.8635 32.3399 33.9017 32.4868C33.9399 32.6338 33.9473 32.7871 33.9234 32.937C33.9234 46.937 33.9234 60.937 33.9234 74.887C33.9234 78.617 32.3934 82.667 28.9234 84.487C24.7434 86.727 19.4534 86.297 15.2934 84.157C11.6634 82.347 8.19337 80.157 4.63337 78.257C3.38976 77.6118 2.34432 76.6415 1.60828 75.4494C0.872229 74.2573 0.473106 72.8879 0.453369 71.487L0.453369 29.117C0.45923 27.7418 0.833315 26.3932 1.53674 25.2114C2.24017 24.0297 3.24727 23.0579 4.45337 22.397L41.7334 1.36702Z"
                fill="#A8A8A8"
              />
              <path
                d="M52.5634 30.717C57.9834 30.367 63.7834 30.507 68.6634 33.177C72.4334 35.177 74.5234 39.517 74.5934 43.707C74.523 43.9732 74.3586 44.2048 74.1307 44.3592C73.9028 44.5136 73.6267 44.5803 73.3534 44.547C71.7834 44.547 70.2134 44.547 68.6434 44.547C68.3407 44.5273 68.0562 44.3954 67.8454 44.1773C67.6346 43.9591 67.5127 43.6702 67.5034 43.367C67.3305 42.3327 66.9329 41.349 66.3385 40.4851C65.7441 39.6212 64.9675 38.8982 64.0634 38.367C61.1734 36.917 57.8034 36.987 54.6434 37.017C52.3434 37.137 49.8534 37.337 47.9034 38.697C47.1852 39.241 46.6579 39.9986 46.3974 40.8611C46.1368 41.7235 46.1564 42.6464 46.4534 43.497C46.9534 44.697 48.3434 45.087 49.4534 45.447C55.9834 47.147 62.9034 46.977 69.3034 49.227C71.9534 50.147 74.5534 51.927 75.4534 54.697C76.0941 56.5741 76.2468 58.5834 75.8969 60.5357C75.547 62.488 74.7061 64.3193 73.4534 65.857C71.1967 68.202 68.2631 69.7824 65.0634 70.377C60.9148 71.2209 56.6589 71.4031 52.4534 70.917C48.4534 70.467 44.3634 69.427 41.3134 66.727C40.0428 65.5621 39.0459 64.1303 38.394 62.5345C37.7422 60.9387 37.4517 59.2184 37.5434 57.497C37.5785 57.2219 37.7191 56.9711 37.9355 56.7976C38.1519 56.6241 38.4272 56.5415 38.7034 56.567C40.2834 56.567 41.8634 56.567 43.4534 56.567C43.5995 56.563 43.7449 56.5882 43.8812 56.6411C44.0175 56.6939 44.1419 56.7734 44.2471 56.8749C44.3523 56.9764 44.4362 57.0978 44.494 57.2321C44.5517 57.3664 44.5821 57.5108 44.5834 57.657C44.6598 58.6376 44.9372 59.5919 45.3983 60.4607C45.8593 61.3295 46.4942 62.0941 47.2634 62.707C50.4734 64.787 54.5134 64.647 58.1934 64.707C61.2434 64.577 64.6734 64.537 67.1934 62.517C67.807 61.9118 68.2537 61.1583 68.4902 60.3295C68.7268 59.5007 68.7451 58.6249 68.5434 57.787C68.1534 56.387 66.6934 55.737 65.4434 55.317C58.9934 53.317 52.0034 54.017 45.6134 51.707C43.0234 50.797 40.5234 49.057 39.5234 46.397C38.7895 44.4978 38.6039 42.4306 38.9875 40.431C39.3712 38.4314 40.3087 36.5798 41.6934 35.087C44.5434 32.217 48.6934 31.087 52.5734 30.717H52.5634Z"
                fill="#A8A8A8"
              />
            </g>
            <defs>
              <clipPath id="clip0_304_13282">
                <rect
                  width="90.75"
                  height="100"
                  fill="white"
                  transform="translate(0.453369 0.297119)"
                />
              </clipPath>
            </defs>
          </svg>

v2:

LANGUAGE
FOOTER APPS:
      {/*<motion.div className="item" variants={item}>
        <Footer />
      </motion.div>*/}

ABOUT ME content :

    "Greetings! I'm an accomplished senior software developer with over a decade of professional experience in full stack development. My technical stack of choice is likely to be dynamic and varied but I have developed a notable affinity for React and its intricate ecosystem.",
    "I can  Services provided: Web, Mobile and desktop development including API integration. Bug fixes and troubleshooting of existing applications.",
    "Consultation on Technology Stack and Architecture:",
    "🤙 Do not hesitate to contact me to discuss your needs and project.",
    "Experienced full-stack engineer with over 15 years of dedicated expertise in designing and developing scalable and innovative applications across diverse sectors, including smart cities, museums, B2B, and public organizations.",
    "Known for exceptional problem-solving skills and a track record of leading a team of 10+ individuals, I have successfully managed the entire software development life cycle, including requirement gathering, design, development, testing, and deployment. My commitment to continuous learning keeps me at the forefront of industry trends and best practices."
