import React from "react"

export const Logo = (props) => {

    const fill = props.fill ?? "white"

    return (
        <div className="logo">
            <svg width="155" height="25" viewBox="0 0 171 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M129.256 2.73942C129.599 2.73682 129.941 2.76744 130.279 2.83086C130.578 2.88813 130.87 2.98323 131.145 3.11387C131.393 3.23071 131.627 3.37429 131.844 3.54202C132.045 3.69737 132.223 3.87814 132.377 4.07974C132.523 4.27205 132.645 4.48136 132.741 4.70309C133.021 5.36625 133.052 6.10885 132.824 6.7923C132.748 7.02075 132.644 7.23872 132.513 7.44102C132.377 7.6522 132.218 7.847 132.037 8.0216C131.844 8.20758 131.627 8.36698 131.392 8.49542C131.175 8.61408 130.948 8.7113 130.713 8.78571L132.764 13.1731H131.973L129.991 8.95626L129.878 8.97079C129.81 8.978 129.741 8.98455 129.673 8.98961C129.603 8.99474 129.537 8.99759 129.464 9.00051C129.39 9.00343 129.319 9.00414 129.255 9.00414H126.111V13.1731H124.468V2.73942H129.256ZM65.4222 8.27775H64.6771V3.47598H67.762C67.9834 3.47336 68.2042 3.50294 68.4168 3.56378C68.6069 3.61938 68.7858 3.70779 68.9452 3.82503C69.1022 3.93996 69.2439 4.07405 69.3673 4.22415C69.4877 4.37382 69.5887 4.53817 69.6673 4.71325C69.7499 4.89261 69.8113 5.08049 69.8521 5.27347C69.8933 5.47182 69.914 5.67392 69.9135 5.87649C69.914 6.07948 69.894 6.28202 69.8538 6.48098C69.8143 6.67304 69.754 6.86039 69.6749 7.03975C69.5976 7.21465 69.4978 7.37877 69.3779 7.52812C69.2557 7.67853 69.1146 7.81268 68.9588 7.92724C68.7981 8.04518 68.6175 8.13365 68.4262 8.18851C68.2101 8.24939 67.9863 8.279 67.762 8.27631L65.4222 8.27775ZM64.6771 9.00343H67.8045C68.1818 9.00647 68.5585 8.96823 68.928 8.88948C69.254 8.81966 69.5675 8.70332 69.8603 8.54408C70.1225 8.40189 70.3669 8.22836 70.5877 8.02737C70.7908 7.84032 70.9667 7.62528 71.1096 7.38877C71.3859 6.93134 71.5329 6.40772 71.5341 5.8736C71.5394 5.46923 71.4592 5.06831 71.2985 4.69704C71.138 4.32577 70.9006 3.99253 70.6018 3.71908C70.3816 3.51781 70.1372 3.34407 69.8745 3.20167C69.5816 3.04106 69.267 2.92372 68.9405 2.85336C68.5673 2.77447 68.1871 2.73626 67.8057 2.73942H63.0334V13.1688H64.6771V8.99908V9.00343ZM38.9261 12.0701V13.1688H37.2964V3.47598H33.4844V2.73942H42.7236V3.47598H38.9261V12.0701ZM97.6842 13.086V13.1665H96.0405V2.73942H99.7619C100.169 2.73728 100.576 2.77447 100.976 2.85046C101.341 2.92091 101.697 3.03392 102.036 3.18716C102.351 3.32943 102.651 3.50353 102.931 3.70674C103.197 3.90175 103.441 4.12566 103.658 4.37436C103.871 4.61794 104.058 4.88137 104.22 5.16098C104.383 5.44197 104.516 5.73768 104.622 6.04416C104.835 6.65857 104.943 7.30413 104.943 7.95411C104.943 8.60473 104.832 9.25065 104.614 9.86408C104.399 10.4781 104.067 11.0449 103.636 11.5331C103.417 11.7812 103.172 12.0049 102.903 12.2C102.626 12.4025 102.327 12.5766 102.013 12.7195C101.677 12.8729 101.325 12.986 100.961 13.0563C100.572 13.1314 100.176 13.1688 99.7804 13.168H98.4276L99.3093 12.4424H99.7163C100.252 12.4542 100.783 12.3238 101.252 12.0643C101.691 11.8141 102.067 11.4692 102.354 11.0549C102.504 10.8417 102.633 10.6159 102.742 10.38C102.854 10.1339 102.947 9.87908 103.019 9.61808C103.095 9.35061 103.152 9.07837 103.192 8.80315C103.23 8.52407 103.247 8.24284 103.247 7.96137C103.25 7.4004 103.177 6.84162 103.029 6.30031C102.958 6.03922 102.865 5.78437 102.753 5.53834C102.644 5.30212 102.515 5.07604 102.366 4.86274C102.222 4.65626 102.057 4.46642 101.871 4.29671C101.686 4.12741 101.482 3.97897 101.263 3.85405C100.794 3.59459 100.264 3.46412 99.7275 3.47598H97.6907V13.0882L97.6842 13.086ZM110.253 13.086V2.73942H113.974C114.382 2.73709 114.79 2.77427 115.191 2.85046C115.556 2.9208 115.913 3.03382 116.251 3.18716C116.567 3.32943 116.866 3.50353 117.146 3.70674C117.412 3.90179 117.656 4.12569 117.873 4.37436C118.299 4.86372 118.626 5.43041 118.837 6.04339C119.05 6.65785 119.157 7.30336 119.156 7.95338C119.156 8.60402 119.046 9.24994 118.828 9.86333C118.614 10.4774 118.281 11.0441 117.851 11.5324C117.632 11.7806 117.386 12.0043 117.118 12.1993C116.839 12.4017 116.541 12.5757 116.229 12.7189C115.892 12.872 115.539 12.985 115.177 13.0556C114.787 13.1306 114.392 13.168 113.995 13.1674H112.646L113.527 12.446H113.934C114.471 12.458 115 12.3275 115.47 12.0679C115.909 11.8181 116.285 11.4735 116.572 11.0593C116.721 10.846 116.85 10.6203 116.959 10.3844C117.072 10.1384 117.164 9.88349 117.236 9.6224C117.309 9.35329 117.365 9.07962 117.402 8.80315C117.439 8.52407 117.458 8.24284 117.457 7.96137C117.459 7.40022 117.384 6.84157 117.236 6.30031C117.164 6.03909 117.072 5.78423 116.959 5.53834C116.85 5.30214 116.721 5.07606 116.572 4.86274C116.285 4.44821 115.908 4.10348 115.469 3.85405C115 3.59449 114.47 3.46402 113.934 3.47598H111.898V13.1688H110.253V13.0882V13.086ZM52.0137 2.49125C52.4566 2.48907 52.8987 2.52818 53.3343 2.60809C53.7299 2.68128 54.1157 2.79961 54.4841 2.96076C54.8241 3.10975 55.1488 3.29155 55.4534 3.50356C55.7421 3.70539 56.0079 3.93801 56.2461 4.1973C56.7132 4.70593 57.0743 5.30212 57.3086 5.95125C57.4264 6.27356 57.5162 6.60549 57.5769 6.94326C57.6961 7.61407 57.6961 8.30062 57.5769 8.9715C57.5162 9.30926 57.4264 9.64115 57.3086 9.96346C57.0752 10.6113 56.715 11.2063 56.249 11.7139C56.0106 11.9732 55.7449 12.206 55.4564 12.4083C55.1516 12.6201 54.8269 12.8018 54.487 12.9511C54.1184 13.1117 53.7327 13.2297 53.3372 13.303C52.463 13.4588 51.5681 13.4588 50.6938 13.303C50.2968 13.2297 49.9094 13.1117 49.539 12.9511C49.1968 12.8021 48.87 12.6203 48.5631 12.4083C48.2721 12.2064 48.004 11.9738 47.7632 11.7145C47.5291 11.4596 47.3214 11.182 47.1428 10.8858C46.9665 10.5913 46.8204 10.2799 46.7065 9.95624C46.5911 9.63383 46.5032 9.30217 46.444 8.96495C46.3276 8.29407 46.3276 7.6083 46.444 6.93741C46.5024 6.60203 46.589 6.27214 46.7029 5.95125C46.9325 5.30133 47.2934 4.70536 47.7632 4.20021C48.0036 3.94047 48.2718 3.70784 48.5631 3.50647C48.8699 3.29414 49.1968 3.11211 49.539 2.96293C49.9094 2.80236 50.2968 2.68428 50.6938 2.61098C51.1301 2.53118 51.573 2.49207 52.0166 2.49415L52.0137 2.49125ZM52.0137 3.14436C51.6998 3.14228 51.3867 3.17662 51.0807 3.24667C50.8013 3.31205 50.5322 3.41507 50.2808 3.5529C50.0365 3.68563 49.807 3.844 49.5965 4.02532C49.3888 4.20651 49.2017 4.40995 49.0387 4.63197C48.8711 4.85995 48.7251 5.10287 48.6023 5.35764C48.475 5.62242 48.3704 5.89746 48.2897 6.17986C47.9541 7.34142 47.9541 8.57399 48.2897 9.73565C48.3703 10.0178 48.4749 10.2926 48.6023 10.5571C48.7252 10.8118 48.8711 11.0547 49.0387 11.2828C49.2022 11.5044 49.3892 11.7078 49.5965 11.8894C49.8066 12.0716 50.0355 12.2313 50.2793 12.3654C50.5308 12.5031 50.7999 12.6058 51.0792 12.671C51.6928 12.8083 52.3294 12.8083 52.943 12.671C53.2224 12.6045 53.4912 12.4994 53.7416 12.3589C53.9836 12.2245 54.2108 12.065 54.4193 11.8829C54.626 11.7011 54.8124 11.4977 54.9757 11.2762C55.1431 11.0482 55.2892 10.8053 55.4119 10.5505C55.5396 10.2861 55.6441 10.0113 55.7247 9.72908C55.8078 9.44015 55.8708 9.14574 55.913 8.84813C56.0392 7.95416 55.975 7.04369 55.7247 6.17622C55.6448 5.89429 55.5409 5.61971 55.4142 5.35547C55.2914 5.10069 55.1454 4.85777 54.9778 4.6298C54.8149 4.40813 54.6283 4.20472 54.4215 4.02314C54.2125 3.84122 53.9845 3.68212 53.7416 3.54855C53.4913 3.41082 53.2235 3.30802 52.9453 3.24305C52.64 3.17296 52.3277 3.13862 52.0144 3.14073L52.0137 3.14436ZM82.4655 13.0134L86.1585 3.90195L85.6892 2.74087H87.3506C88.7564 6.21781 90.1645 9.6943 91.5756 13.1702H89.9295L89.2435 11.4953L88.4605 9.56221L86.5553 4.87434L85.4224 7.66167L85.407 7.69867L84.6495 9.56221H84.6536L83.9552 11.2885L83.1935 13.1688H82.4089L82.4721 13.0134H82.4655ZM129.195 8.27775C129.419 8.28037 129.643 8.25076 129.859 8.18994C130.05 8.13496 130.23 8.0465 130.391 7.92873C130.547 7.81411 130.687 7.68002 130.81 7.52961C130.931 7.38032 131.032 7.21561 131.109 7.03975C131.189 6.86003 131.25 6.67221 131.289 6.47956C131.329 6.28059 131.349 6.07806 131.348 5.87505C131.351 5.47561 131.27 5.07999 131.109 4.71397C131.033 4.5388 130.933 4.37457 130.813 4.2256C130.691 4.075 130.55 3.94084 130.394 3.82648C130.233 3.70866 130.053 3.6202 129.862 3.56524C129.646 3.50441 129.422 3.47483 129.198 3.47743H126.112V8.27917L129.195 8.27775ZM138.342 13.0556V2.73942H145.857V3.47598H139.988V6.67691H144.166V7.4026H139.988V12.4525H145.86V13.1781H138.345V13.0556H138.342ZM157.341 5.15301L156.778 5.20961V5.08044C156.779 4.92469 156.761 4.7694 156.723 4.61819C156.689 4.48081 156.634 4.34927 156.561 4.22778C156.489 4.10663 156.401 3.99416 156.302 3.89252C156.201 3.78817 156.088 3.69499 155.966 3.61459C155.839 3.53059 155.703 3.45774 155.563 3.39688C155.414 3.33202 155.26 3.27913 155.103 3.23869C154.776 3.15352 154.44 3.11059 154.102 3.11097C153.902 3.11064 153.701 3.123 153.502 3.14798C153.321 3.17154 153.141 3.20889 152.964 3.25973C152.803 3.30618 152.646 3.36338 152.491 3.431C152.354 3.49221 152.223 3.56504 152.098 3.64869C151.985 3.72186 151.882 3.80703 151.788 3.90268C151.701 3.99002 151.626 4.08749 151.563 4.19295C151.505 4.29199 151.458 4.39806 151.426 4.50861C151.397 4.61489 151.381 4.72477 151.381 4.83517C151.384 5.02387 151.421 5.21047 151.492 5.38522C151.563 5.55008 151.667 5.69842 151.798 5.82062C152.117 6.10706 152.479 6.34124 152.871 6.51435C153.09 6.61526 153.319 6.71391 153.559 6.81118C153.798 6.90841 154.05 7.00419 154.3 7.0942C154.562 7.18778 154.815 7.29157 155.058 7.40403C155.299 7.5165 155.536 7.64136 155.759 7.77342C155.983 7.90537 156.194 8.05769 156.389 8.22842C156.582 8.39712 156.758 8.58346 156.916 8.78499C157.08 8.99831 157.206 9.23909 157.287 9.49612C157.374 9.78008 157.421 10.0749 157.428 10.372C157.439 10.5729 157.425 10.7744 157.388 10.9722C157.35 11.172 157.29 11.3668 157.207 11.5527C157.123 11.7424 157.019 11.922 156.895 12.0882C156.768 12.2586 156.622 12.4147 156.463 12.5541C156.293 12.7022 156.108 12.8321 155.911 12.9416C155.696 13.06 155.473 13.1595 155.242 13.2392C154.706 13.4167 154.141 13.5029 153.577 13.4938C153.364 13.4937 153.151 13.4811 152.94 13.4561C152.73 13.4306 152.521 13.3926 152.315 13.3422C152.114 13.2938 151.917 13.2296 151.727 13.1499C151.545 13.0744 151.371 12.9824 151.207 12.8749C150.887 12.6694 150.617 12.3938 150.419 12.0694C150.317 11.9011 150.241 11.7186 150.193 11.5281C150.142 11.3234 150.118 11.1132 150.121 10.9025V10.8009L150.756 10.7327V10.859C150.755 11.0152 150.773 11.1711 150.812 11.3226C150.848 11.4621 150.904 11.5954 150.98 11.7182C151.055 11.8415 151.144 11.9558 151.244 12.0592C151.347 12.1644 151.46 12.2582 151.582 12.3386C151.71 12.4226 151.844 12.4954 151.984 12.5563C152.132 12.6207 152.283 12.6736 152.438 12.7145C152.6 12.7571 152.764 12.7891 152.928 12.8103C153.095 12.8315 153.263 12.8419 153.433 12.8415C153.632 12.8422 153.832 12.8298 154.03 12.8045C154.213 12.7812 154.392 12.7441 154.569 12.6935C154.731 12.647 154.889 12.5886 155.041 12.5185C155.178 12.4556 155.309 12.3803 155.434 12.2936C155.546 12.2152 155.651 12.1257 155.746 12.0265C155.834 11.9336 155.912 11.8311 155.978 11.721C156.042 11.621 156.09 11.5131 156.124 11.4003C156.155 11.2938 156.171 11.1833 156.171 11.0723C156.173 10.9235 156.152 10.7751 156.112 10.6318C156.073 10.5021 156.015 10.3795 155.937 10.269C155.853 10.1538 155.759 10.0474 155.654 9.95118C155.542 9.84777 155.42 9.75449 155.291 9.67246C155.148 9.58171 155.001 9.49837 154.85 9.4229C154.692 9.344 154.527 9.26995 154.352 9.20079C154.235 9.15432 153.282 8.77123 153.258 8.77123C153.075 8.69861 152.888 8.62075 152.698 8.53753C152.51 8.45628 152.327 8.37133 152.147 8.2843C151.967 8.19709 151.792 8.09868 151.623 7.98967C151.461 7.8841 151.306 7.76777 151.159 7.64136C151.013 7.51638 150.879 7.37841 150.758 7.22913C150.638 7.07848 150.531 6.91722 150.439 6.74733C150.241 6.36185 150.134 5.93603 150.126 5.50278C150.121 5.30611 150.138 5.10947 150.176 4.91644C150.215 4.72229 150.274 4.53296 150.354 4.35187C150.437 4.16594 150.54 3.99012 150.662 3.82793C150.789 3.6608 150.933 3.50777 151.092 3.37148C151.263 3.22497 151.449 3.09656 151.645 2.98834C151.859 2.87034 152.082 2.77104 152.313 2.69153C152.567 2.60382 152.829 2.53993 153.094 2.50069C153.387 2.45747 153.682 2.43637 153.978 2.43755C154.406 2.43631 154.833 2.48897 155.248 2.5943C155.447 2.64482 155.641 2.71057 155.83 2.79096C156.011 2.86837 156.187 2.96086 156.352 3.06743C156.515 3.1715 156.664 3.29319 156.799 3.43027C156.932 3.56491 157.049 3.71469 157.147 3.87655C157.25 4.04477 157.326 4.22722 157.374 4.4179C157.424 4.62229 157.449 4.83221 157.447 5.0427V5.14502L157.344 5.15518L157.341 5.15301ZM169.878 5.15301L169.314 5.20961V5.08044C169.316 4.92464 169.297 4.76931 169.259 4.61819C169.225 4.48072 169.17 4.34912 169.097 4.22778C169.024 4.10665 168.937 3.99418 168.839 3.89252C168.738 3.78817 168.624 3.69499 168.504 3.61459C168.375 3.53073 168.24 3.4579 168.099 3.39688C167.951 3.33226 167.797 3.27937 167.64 3.23869C167.312 3.15352 166.976 3.11059 166.638 3.11097C166.438 3.11062 166.237 3.12298 166.04 3.14798C165.856 3.17139 165.677 3.20875 165.501 3.25973C165.34 3.30593 165.181 3.36316 165.029 3.431C164.891 3.49221 164.758 3.56504 164.634 3.64869C164.522 3.72204 164.417 3.8072 164.323 3.90268C164.237 3.99002 164.162 4.08749 164.098 4.19295C164.04 4.29186 163.994 4.39796 163.963 4.50861C163.933 4.61489 163.918 4.72477 163.918 4.83517C163.919 5.02394 163.957 5.21069 164.029 5.38522C164.098 5.55037 164.203 5.6988 164.334 5.82062C164.653 6.10724 165.015 6.34142 165.407 6.51435C165.626 6.61502 165.855 6.71391 166.094 6.81118C166.334 6.90841 166.581 7.00276 166.837 7.0942C167.099 7.18803 167.351 7.29132 167.593 7.40403C167.833 7.51537 168.067 7.63862 168.295 7.77342C168.519 7.90537 168.729 8.05769 168.926 8.22842C169.118 8.39712 169.294 8.58346 169.451 8.78499C169.616 8.99849 169.741 9.23921 169.822 9.49612C169.911 9.7799 169.961 10.0747 169.967 10.372C169.977 10.5729 169.964 10.7743 169.927 10.9722C169.889 11.172 169.829 11.3668 169.746 11.5527C169.662 11.7425 169.557 11.922 169.434 12.0882C169.306 12.2586 169.162 12.4147 169.001 12.5541C168.832 12.7024 168.646 12.8322 168.449 12.9416C168.235 13.0601 168.012 13.1597 167.781 13.2392C167.244 13.4167 166.681 13.5029 166.116 13.4938C165.903 13.4937 165.69 13.4811 165.479 13.4561C165.268 13.4306 165.06 13.3926 164.854 13.3422C164.653 13.2936 164.456 13.2293 164.265 13.1499C164.084 13.0743 163.91 12.9822 163.745 12.8749C163.586 12.7716 163.438 12.6512 163.304 12.5156C163.173 12.3806 163.057 12.2308 162.958 12.0694C162.857 11.901 162.78 11.7186 162.732 11.5281C162.681 11.3234 162.656 11.1132 162.659 10.9025V10.8009L163.295 10.7327V10.859C163.293 11.0153 163.312 11.1712 163.351 11.3226C163.387 11.4621 163.443 11.5954 163.52 11.7182C163.594 11.8414 163.682 11.9558 163.783 12.0592C163.886 12.1641 163.998 12.2578 164.121 12.3386C164.248 12.4226 164.383 12.4954 164.524 12.5563C164.671 12.6207 164.822 12.6736 164.977 12.7145C165.138 12.7571 165.302 12.7891 165.466 12.8103C165.634 12.8315 165.803 12.8419 165.972 12.8415C166.171 12.8422 166.371 12.8298 166.57 12.8045C166.752 12.7813 166.932 12.7442 167.108 12.6935C167.27 12.647 167.428 12.5886 167.58 12.5185C167.718 12.4556 167.849 12.3803 167.973 12.2936C168.086 12.2152 168.191 12.1257 168.285 12.0265C168.374 11.9336 168.453 11.8311 168.518 11.721C168.579 11.6206 168.626 11.5129 168.66 11.4003C168.69 11.2936 168.705 11.1832 168.705 11.0723C168.707 10.9235 168.688 10.7751 168.647 10.6318C168.609 10.502 168.549 10.3794 168.472 10.269C168.388 10.1536 168.294 10.0471 168.19 9.95118C168.077 9.84768 167.955 9.75449 167.825 9.67246C167.683 9.5818 167.535 9.49855 167.384 9.4229C167.227 9.344 167.062 9.26995 166.888 9.20079C166.769 9.15432 165.817 8.77123 165.792 8.77123C165.608 8.69861 165.423 8.62099 165.231 8.53753C165.042 8.45407 164.86 8.37133 164.682 8.2843C164.501 8.19709 164.326 8.09868 164.158 7.98967C163.996 7.88392 163.84 7.76759 163.693 7.64136C163.547 7.51638 163.414 7.37841 163.294 7.22913C163.173 7.07848 163.066 6.91722 162.974 6.74733C162.775 6.3619 162.668 5.9361 162.66 5.50278C162.65 5.10687 162.728 4.71357 162.89 4.35187C162.97 4.16582 163.074 3.98996 163.196 3.82793C163.323 3.66061 163.468 3.50756 163.627 3.37148C163.797 3.22481 163.983 3.09638 164.179 2.98834C164.393 2.87047 164.616 2.77118 164.847 2.69153C165.101 2.60391 165.363 2.54002 165.629 2.50069C165.922 2.45751 166.217 2.43639 166.513 2.43755C166.942 2.43636 167.367 2.48902 167.783 2.5943C167.981 2.64504 168.176 2.71078 168.365 2.79096C168.546 2.86852 168.721 2.961 168.886 3.06743C169.049 3.1713 169.199 3.29302 169.333 3.43027C169.466 3.56528 169.583 3.71502 169.682 3.87655C169.784 4.0448 169.86 4.22725 169.909 4.4179C169.959 4.62229 169.983 4.83221 169.981 5.0427V5.14502L169.878 5.15301Z" fill={fill}/>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.59414 0H12.8985L24.9659 29.7851H21.7044L19.2202 23.7294L17.6887 19.9175H17.6959L11.6412 5.02091L6.20674 18.3856L6.19658 18.411L5.58571 19.9139H5.59298L3.97857 23.9283L1.57877 29.7851H0L1.10391 27.061L10.8304 3.06379L9.59414 0ZM18.1119 0L30.2214 29.7851H33.4837L21.4164 0H18.1119Z" fill={fill}/>
                <path d="M43.5156 27.1915V21.0088H44.3743V22.9783H47.6329V21.0088H47.9332V27.1915H47.6329V23.2787H44.3743V27.1915H43.5156Z" fill={fill}/>
                <path d="M49.9219 27.1915V21.0088H54.3372V21.3179H50.7798V23.3933H53.3106V23.6938H50.7798V26.891H54.3372V27.1915H49.9219Z" fill={fill}/>
                <path d="M60.6332 27.7126H60.2346V27.1915H55.4727V27.7126H55.0742V26.891H55.3047L57.4289 21.6452L57.1722 21.0088H58.0325L60.4142 26.891H60.632L60.6332 27.7126ZM55.6327 26.891H59.5599L57.5962 22.0508L55.6327 26.891Z" fill={fill}/>
                <path d="M62.0469 21.0076H64.6052C64.9659 20.9994 65.3255 21.0546 65.6667 21.171C65.9294 21.2608 66.1703 21.4035 66.3752 21.5904C66.5435 21.7479 66.6687 21.9457 66.7389 22.1651C66.8033 22.3698 66.8091 22.5885 66.756 22.7965C66.697 23.015 66.5831 23.2148 66.4248 23.377C66.2341 23.5706 66.0026 23.7194 65.7476 23.8124C66.0617 23.8886 66.3522 24.0418 66.5925 24.258C66.7961 24.4439 66.9503 24.678 67.04 24.9386C67.1227 25.1918 67.1404 25.4618 67.0908 25.7235C67.0412 25.9851 66.926 26.2302 66.756 26.4357C66.56 26.6678 66.3133 26.852 66.0345 26.9742C65.6844 27.1246 65.3054 27.1969 64.9246 27.186H62.0469V21.0076ZM64.5751 23.7108C64.8401 23.721 65.1035 23.6598 65.3367 23.5337C65.5244 23.4286 65.6815 23.2766 65.7925 23.0925C65.8947 22.916 65.9484 22.7158 65.9484 22.512C65.9484 22.3081 65.8947 22.108 65.7925 21.9315C65.6815 21.7474 65.5244 21.5954 65.3367 21.4902C65.1029 21.3654 64.8401 21.3055 64.5751 21.3168H62.8971V23.7115L64.5751 23.7108ZM64.885 26.89C65.156 26.9002 65.4235 26.8261 65.6508 26.6781C65.8486 26.5435 66.0074 26.3593 66.1112 26.1439C66.2135 25.927 66.266 25.6903 66.266 25.4505C66.266 25.2109 66.2135 24.9742 66.1112 24.7573C66.0074 24.5417 65.8486 24.3575 65.6508 24.2231C65.4235 24.075 65.156 24.001 64.885 24.0112H62.8971V26.89H64.885Z" fill={fill}/>
                <path d="M73.0441 21.0088H73.8938L73.4073 21.6713V27.1915H73.1062V22.0864L69.3246 27.1741V27.1915H69.0234V21.0088H69.3246V26.0159L73.0441 21.0088Z" fill={fill}/>
                <path d="M78.9789 27.1915V25.2924L77.9877 24.1183L76.1291 27.1915H75.1289L77.4126 23.447L75.3497 21.0088H75.7482L78.9789 24.8243V21.0088H79.8374V24.8243L83.0687 21.0088H83.4666L81.4038 23.447L83.6875 27.1915H82.6873L80.8287 24.1183L79.8374 25.2924V27.1915H78.9789Z" fill={fill}/>
                <path d="M89.302 21.0088H90.1516L89.6651 21.6713V27.1915H89.364V22.0864L85.5824 27.1741V27.1915H85.2812V21.0088H85.5824V26.0159L89.302 21.0088Z" fill={fill}/>
                <path d="M92.7396 21.0088L94.6512 25.1952L96.5634 21.0088H97.422V27.1915H96.5708V21.6626L94.3752 26.4585L92.1716 21.6358V27.1915H91.8711V21.0088H92.7396Z" fill={fill}/>
                <path d="M102.605 20.8563C103.11 20.8454 103.611 20.9402 104.075 21.1349C104.462 21.2984 104.81 21.54 105.097 21.8449C105.385 22.1497 105.607 22.5109 105.748 22.9056C106.031 23.6754 106.031 24.5204 105.748 25.2901C105.607 25.6848 105.385 26.046 105.097 26.351C104.81 26.656 104.462 26.8979 104.075 27.0615C103.129 27.4321 102.078 27.4321 101.132 27.0615C100.734 26.8924 100.375 26.6426 100.079 26.3279C99.8001 26.0281 99.5864 25.6751 99.4499 25.2901C99.173 24.5194 99.173 23.6763 99.4499 22.9056C99.5864 22.5207 99.8001 22.1676 100.079 21.8679C100.375 21.5532 100.734 21.3036 101.132 21.1349C101.598 20.9405 102.1 20.8455 102.605 20.8563ZM102.605 21.1124C102.228 21.104 101.855 21.1921 101.521 21.3686C101.217 21.535 100.952 21.7655 100.747 22.0442C100.536 22.3334 100.379 22.6581 100.282 23.0028C100.076 23.7183 100.076 24.4774 100.282 25.1929C100.378 25.5376 100.536 25.8624 100.747 26.1515C100.952 26.4306 101.216 26.6612 101.521 26.8271C101.855 27.0035 102.228 27.0917 102.605 27.0833C102.982 27.0922 103.353 27.004 103.685 26.8271C103.988 26.6603 104.251 26.4298 104.455 26.1515C104.667 25.8624 104.824 25.5376 104.92 25.1929C105.127 24.4774 105.127 23.7183 104.92 23.0028C104.824 22.6581 104.667 22.3334 104.455 22.0442C104.251 21.7663 103.988 21.5358 103.685 21.3686C103.353 21.193 102.981 21.106 102.605 21.1161V21.1124Z" fill={fill}/>
                <path d="M113.307 22.385L113.05 22.4822C112.814 22.0058 112.511 21.6539 112.138 21.4264C111.791 21.2072 111.389 21.0923 110.978 21.0956C110.598 21.0872 110.221 21.1769 109.885 21.356C109.578 21.5242 109.311 21.756 109.101 22.036C108.887 22.3256 108.728 22.652 108.632 22.999C108.425 23.7206 108.425 24.4855 108.632 25.2072C108.728 25.5539 108.887 25.8802 109.101 26.1694C109.311 26.4493 109.578 26.6811 109.885 26.8494C110.235 27.033 110.629 27.1229 111.025 27.1102C111.421 27.0975 111.807 26.9826 112.145 26.7768C112.514 26.5533 112.816 26.2031 113.053 25.7261L113.31 25.8225C113.202 26.078 113.051 26.3138 112.867 26.5207C112.697 26.7095 112.501 26.8732 112.286 27.0068C112.074 27.1355 111.844 27.2308 111.604 27.2891C111.363 27.3478 111.117 27.3775 110.869 27.3777C110.379 27.3884 109.892 27.2918 109.443 27.0946C109.057 26.9213 108.71 26.6669 108.43 26.3487C108.161 26.0392 107.956 25.6806 107.824 25.2928C107.69 24.9053 107.622 24.4977 107.625 24.0874C107.628 23.6781 107.699 23.2721 107.837 22.8865C107.973 22.501 108.182 22.1454 108.453 21.8393C108.737 21.5241 109.084 21.2715 109.471 21.0976C109.919 20.9009 110.406 20.8075 110.896 20.8242C111.141 20.8241 111.385 20.8565 111.623 20.9206C111.859 20.9857 112.086 21.0835 112.295 21.2109C112.511 21.3428 112.705 21.5067 112.87 21.6971C113.05 21.9031 113.197 22.1351 113.307 22.385Z" fill={fill}/>
                <path d="M114.328 21.3179V21.0088H119.79V21.3179H117.488V27.1915H116.638V21.3179H114.328Z" fill={fill}/>
                <path d="M124.032 27.1915H121.207V21.0088H122.067V23.5348H124.03C124.515 23.5348 124.919 23.6246 125.242 23.804C125.541 23.9609 125.792 24.194 125.97 24.4797C126.13 24.7466 126.216 25.052 126.216 25.3635C126.222 25.6744 126.139 25.9804 125.977 26.2466C125.8 26.5322 125.549 26.7653 125.251 26.9223C124.927 27.1012 124.521 27.191 124.032 27.1915ZM124.006 23.8353H122.067V26.8831H124.006C124.275 26.8925 124.541 26.8136 124.762 26.6581C124.961 26.5125 125.12 26.3178 125.222 26.0929C125.326 25.8625 125.379 25.6125 125.377 25.3598C125.379 25.1075 125.327 24.8575 125.227 24.6262C125.127 24.4009 124.969 24.2059 124.77 24.0609C124.546 23.9045 124.278 23.8252 124.006 23.8353Z" fill={fill}/>
                <path d="M131.008 21.0076H133.566C133.927 20.9994 134.287 21.0546 134.629 21.171C134.891 21.2608 135.131 21.4035 135.336 21.5904C135.505 21.7475 135.629 21.9455 135.699 22.1651C135.764 22.3697 135.771 22.5885 135.718 22.7965C135.658 23.0151 135.544 23.2151 135.385 23.377C135.195 23.5709 134.963 23.7195 134.708 23.8124C135.023 23.8886 135.313 24.0418 135.554 24.258C135.758 24.4437 135.911 24.6779 136 24.9386C136.083 25.1874 136.101 25.453 136.053 25.7107C136.006 25.9774 135.89 26.2273 135.718 26.4364C135.522 26.6684 135.274 26.8526 134.996 26.9748C134.645 27.1255 134.266 27.1978 133.885 27.1867H131.009L131.008 21.0076ZM133.54 23.7108C133.804 23.7211 134.067 23.6599 134.3 23.5337C134.487 23.4286 134.645 23.2766 134.756 23.0925C134.858 22.916 134.912 22.7158 134.912 22.512C134.912 22.3081 134.858 22.108 134.756 21.9315C134.645 21.7474 134.487 21.5954 134.3 21.4902C134.067 21.3641 133.804 21.3029 133.54 21.3132H131.858V23.7079L133.54 23.7108ZM133.849 26.89C134.12 26.9002 134.388 26.8261 134.616 26.6781C134.813 26.5432 134.971 26.3591 135.075 26.1439C135.177 25.927 135.229 25.6903 135.229 25.4505C135.229 25.2109 135.177 24.9742 135.075 24.7573C134.972 24.542 134.813 24.3577 134.616 24.2231C134.388 24.075 134.12 24.001 133.849 24.0112H131.858V26.89H133.849Z" fill={fill}/>
                <path d="M146.207 27.7126H145.809V27.1915H141.047V27.7126H140.648V26.891H140.878L143.003 21.6452L142.746 21.0088H143.605L145.986 26.891H146.204L146.207 27.7126ZM141.206 26.891H145.134L143.17 22.0508L141.206 26.891Z" fill={fill}/>
                <path d="M149.239 25.3011L149.229 25.3192L147.188 21.0088H148.037L149.657 24.2859L150.984 21.0088H151.312L148.808 27.1915H148.48L149.239 25.3011Z" fill={fill}/>
                <path d="M153.703 23.7111H155.376C155.767 23.7183 156.157 23.7537 156.544 23.8171C156.858 23.8933 157.149 24.0465 157.388 24.2627C157.593 24.4484 157.747 24.6826 157.835 24.9433C157.918 25.1921 157.937 25.4577 157.889 25.7155C157.841 25.9821 157.726 26.232 157.553 26.4411C157.356 26.6731 157.11 26.8573 156.832 26.9795C156.481 27.1301 156.101 27.2024 155.72 27.1914H152.844V21.0088H157.26V21.3179H153.702L153.703 23.7111ZM153.703 26.8903H155.686C155.957 26.9006 156.224 26.8265 156.452 26.6784C156.649 26.5438 156.808 26.3596 156.911 26.1443C157.014 25.9275 157.067 25.6907 157.067 25.4509C157.067 25.2112 157.014 24.9744 156.911 24.7576C156.808 24.5422 156.65 24.3579 156.452 24.2235C156.224 24.0754 155.957 24.0014 155.686 24.0116H153.703V26.8903Z" fill={fill}/>
                <path d="M158.938 27.1915L161.186 21.6452L160.93 21.0088H161.788L164.293 27.1915H163.443L162.727 25.4426H159.986L159.268 27.1915H158.938ZM160.097 25.1422H162.611L161.353 22.0508L160.097 25.1422Z" fill={fill}/>
                <path d="M165.621 27.1915V21.0088H170.036V21.3179H166.479V23.3933H169.01V23.6938H166.479V26.891H170.036V27.1915H165.621Z" fill={fill}/>
            </svg>
        </div>
    )
}