import Head from "next/head";
import Link from "next/link";

const Layout = ({children, title = "Crypto Tracker"}) => {
    return (
        <div className="layout">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="header">
                <Link href="/" passHref>
                    <a>
                        <svg width="466" height="224" viewBox="0 0 466 224" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="192.5" width="465" height="31" rx="2.5" fill="#343434" stroke="black"/>
                            <path d="M182 220L175.072 211H188.928L182 220Z" fill="#D61414"/>
                            <path d="M182 196L188.928 205H175.072L182 196Z" fill="#1BDA17"/>
                            <rect x="357" y="220" width="24" height="4" transform="rotate(-90 357 220)" fill="#1FE4C1"/>
                            <path d="M376 197H378V201H376V197Z" fill="#1FE4C1"/>
                            <path d="M376 204H378V208H376V204Z" fill="#1FE4C1"/>
                            <path d="M378 201H380V204H378V201Z" fill="#1FE4C1"/>
                            <rect x="361" y="196" width="15" height="4" fill="#1FE4C1"/>
                            <rect x="361" y="206" width="13" height="4" fill="#1FE4C1"/>
                            <path d="M374 220V206H378V220H374Z" fill="#1FE4C1"/>
                            <path d="M376 207H380V210H376V207Z" fill="#343434"/>
                            <path d="M376.1 196L376.1 201" stroke="#343434" stroke-width="0.2"/>
                            <line x1="372.1" y1="196" x2="372.1" y2="200" stroke="#343434" stroke-width="0.2"/>
                            <line x1="368.1" y1="196" x2="368.1" y2="200" stroke="#343434" stroke-width="0.2"/>
                            <path d="M364.1 196V200" stroke="#343434" stroke-width="0.2"/>
                            <path d="M361 196V200" stroke="#343434" stroke-width="0.2"/>
                            <path d="M361 200H357" stroke="#343434" stroke-width="0.2"/>
                            <path d="M361 203H357" stroke="#343434" stroke-width="0.2"/>
                            <path d="M361 206H357" stroke="#343434" stroke-width="0.2"/>
                            <path d="M361 210H357" stroke="#343434" stroke-width="0.2"/>
                            <path d="M361 214H359H357" stroke="#343434" stroke-width="0.2"/>
                            <path d="M361 217H359H357" stroke="#343434" stroke-width="0.2"/>
                            <path d="M361 217H359H357" stroke="#343434" stroke-width="0.2"/>
                            <path d="M361 210V208V206" stroke="#343434" stroke-width="0.2"/>
                            <path d="M364 210V208V206" stroke="#343434" stroke-width="0.2"/>
                            <path d="M368 210V208V206" stroke="#343434" stroke-width="0.2"/>
                            <path d="M372 210V208V206" stroke="#343434" stroke-width="0.2"/>
                            <path d="M378 210H367.5H357" stroke="#343434" stroke-width="0.2"/>
                            <path d="M378 214H376H374" stroke="#343434" stroke-width="0.2"/>
                            <path d="M378 217H376H374" stroke="#343434" stroke-width="0.2"/>
                            <path d="M376 210V208V206" stroke="#343434" stroke-width="0.2"/>
                            <path d="M376 210V207V204" stroke="#343434" stroke-width="0.2"/>
                            <path d="M331 196H335V200H331V196Z" fill="#1FE4C1"/>
                            <path d="M335 196H339V200H335V196Z" fill="#1FE4C1"/>
                            <path d="M339 196H343V200H339V196Z" fill="#1FE4C1"/>
                            <path d="M343 196H347V200H343V196Z" fill="#1FE4C1"/>
                            <path d="M347 196H351V200H347V196Z" fill="#1FE4C1"/>
                            <path d="M331 200H335V204H331V200Z" fill="#1FE4C1"/>
                            <path d="M331 204H335V208H331V204Z" fill="#1FE4C1"/>
                            <path d="M335 206H339V210H335V206Z" fill="#1FE4C1"/>
                            <path d="M339 206H343V210H339V206Z" fill="#1FE4C1"/>
                            <path d="M343 206H347V210H343V206Z" fill="#1FE4C1"/>
                            <path d="M347 206H351V210H347V206Z" fill="#1FE4C1"/>
                            <path d="M331 216H335V220H331V216Z" fill="#1FE4C1"/>
                            <path d="M331 216H335V220H331V216Z" fill="#1FE4C1"/>
                            <path d="M335 216H339V220H335V216Z" fill="#1FE4C1"/>
                            <path d="M339 216H343V220H339V216Z" fill="#1FE4C1"/>
                            <path d="M343 216H347V220H343V216Z" fill="#1FE4C1"/>
                            <path d="M347 216H351V220H347V216Z" fill="#1FE4C1"/>
                            <path d="M331 212H335V216H331V212Z" fill="#1FE4C1"/>
                            <path d="M331 208H335V212H331V208Z" fill="#1FE4C1"/>
                            <line x1="335" y1="200.1" x2="331" y2="200.1" stroke="#343434" stroke-width="0.2"/>
                            <line x1="338.9" y1="200" x2="338.9" y2="196" stroke="#343434" stroke-width="0.2"/>
                            <line x1="342.9" y1="200" x2="342.9" y2="196" stroke="#343434" stroke-width="0.2"/>
                            <line x1="346.9" y1="200" x2="346.9" y2="196" stroke="#343434" stroke-width="0.2"/>
                            <line x1="338.9" y1="210" x2="338.9" y2="206" stroke="#343434" stroke-width="0.2"/>
                            <line x1="342.9" y1="210" x2="342.9" y2="206" stroke="#343434" stroke-width="0.2"/>
                            <line x1="346.9" y1="210" x2="346.9" y2="206" stroke="#343434" stroke-width="0.2"/>
                            <line x1="338.9" y1="220" x2="338.9" y2="216" stroke="#343434" stroke-width="0.2"/>
                            <line x1="342.9" y1="220" x2="342.9" y2="216" stroke="#343434" stroke-width="0.2"/>
                            <line x1="346.9" y1="220" x2="346.9" y2="216" stroke="#343434" stroke-width="0.2"/>
                            <line x1="335" y1="204.1" x2="331" y2="204.1" stroke="#343434" stroke-width="0.2"/>
                            <line x1="335" y1="208.1" x2="331" y2="208.1" stroke="#343434" stroke-width="0.2"/>
                            <line x1="335" y1="212.1" x2="331" y2="212.1" stroke="#343434" stroke-width="0.2"/>
                            <line x1="335" y1="216.1" x2="331" y2="216.1" stroke="#343434" stroke-width="0.2"/>
                            <line x1="334.9" y1="220" x2="334.9" y2="196" stroke="#343434" stroke-width="0.2"/>
                            <path d="M307 196H311V200H307V196Z" fill="#1FE4C1"/>
                            <path d="M307 200H311V204H307V200Z" fill="#1FE4C1"/>
                            <path d="M307 204H311V208H307V204Z" fill="#1FE4C1"/>
                            <path d="M311 206H315V210H311V206Z" fill="#1FE4C1"/>
                            <path d="M315 202H319V206H315V202Z" fill="#1FE4C1"/>
                            <path d="M321 196H325V200H321V196Z" fill="#1FE4C1"/>
                            <path d="M321 216H325V220H321V216Z" fill="#1FE4C1"/>
                            <path d="M319 198H323V202H319V198Z" fill="#1FE4C1"/>
                            <path d="M319 214H323V218H319V214Z" fill="#1FE4C1"/>
                            <path d="M315 210H319V214H315V210Z" fill="#1FE4C1"/>
                            <path d="M307 208H311V212H307V208Z" fill="#1FE4C1"/>
                            <path d="M307 212H311V216H307V212Z" fill="#1FE4C1"/>
                            <path d="M307 216H311V220H307V216Z" fill="#1FE4C1"/>
                            <line x1="311" y1="200.1" x2="307" y2="200.1" stroke="#343434" stroke-width="0.2"/>
                            <line x1="323" y1="198.1" x2="319" y2="198.1" stroke="#343434" stroke-width="0.2"/>
                            <line x1="323" y1="218.1" x2="319" y2="218.1" stroke="#343434" stroke-width="0.2"/>
                            <line x1="322.9" y1="202" x2="322.9" y2="198" stroke="#343434" stroke-width="0.2"/>
                            <line x1="322.9" y1="218" x2="322.9" y2="214" stroke="#343434" stroke-width="0.2"/>
                            <path d="M311 220V196" stroke="#343434" stroke-width="0.2"/>
                            <line x1="311" y1="204.1" x2="307" y2="204.1" stroke="#343434" stroke-width="0.2"/>
                            <line x1="311" y1="208.1" x2="307" y2="208.1" stroke="#343434" stroke-width="0.2"/>
                            <line x1="311" y1="212.1" x2="307" y2="212.1" stroke="#343434" stroke-width="0.2"/>
                            <line x1="311" y1="216.1" x2="307" y2="216.1" stroke="#343434" stroke-width="0.2"/>
                            <path d="M277 196H301V200H277V196Z" fill="#1FE4C1"/>
                            <path d="M281 216H301V220H281V216Z" fill="#1FE4C1"/>
                            <rect x="277" y="196" width="4" height="24" fill="#1FE4C1"/>
                            <line x1="297.1" y1="196" x2="297.1" y2="200" stroke="#343434" stroke-width="0.2"/>
                            <line x1="293.1" y1="196" x2="293.1" y2="200" stroke="#343434" stroke-width="0.2"/>
                            <line x1="289.1" y1="196" x2="289.1" y2="200" stroke="black" stroke-width="0.2"/>
                            <line x1="289.1" y1="216" x2="289.1" y2="220" stroke="black" stroke-width="0.2"/>
                            <line x1="293.1" y1="216" x2="293.1" y2="220" stroke="black" stroke-width="0.2"/>
                            <line x1="297.1" y1="216" x2="297.1" y2="220" stroke="black" stroke-width="0.2"/>
                            <line x1="285.1" y1="196" x2="285.1" y2="200" stroke="black" stroke-width="0.2"/>
                            <line x1="285.1" y1="216" x2="285.1" y2="220" stroke="black" stroke-width="0.2"/>
                            <path d="M281.1 196V200" stroke="black" stroke-width="0.2"/>
                            <path d="M281 216V220" stroke="black" stroke-width="0.2"/>
                            <path d="M281 200H277" stroke="black" stroke-width="0.2"/>
                            <path d="M281 204H277" stroke="black" stroke-width="0.2"/>
                            <path d="M281 208H277" stroke="black" stroke-width="0.2"/>
                            <path d="M281 212H277" stroke="black" stroke-width="0.2"/>
                            <path d="M281 216H277" stroke="black" stroke-width="0.2"/>
                            <path d="M251 208H255V212H251V208Z" fill="#1FE4C1"/>
                            <path d="M251 204H255V208H251V204Z" fill="#1FE4C1"/>
                            <path d="M255 200H259V204H255V200Z" fill="#1FE4C1"/>
                            <path d="M259 196H263V200H259V196Z" fill="#1FE4C1"/>
                            <path d="M263 200H267V204H263V200Z" fill="#1FE4C1"/>
                            <path d="M267 204H271V208H267V204Z" fill="#1FE4C1"/>
                            <path d="M267 208H271V212H267V208Z" fill="#1FE4C1"/>
                            <path d="M263 208H267V212H263V208Z" fill="#1FE4C1"/>
                            <path d="M259 208H263V212H259V208Z" fill="#1FE4C1"/>
                            <path d="M255 208H259V212H255V208Z" fill="#1FE4C1"/>
                            <path d="M267 212H271V216H267V212Z" fill="#1FE4C1"/>
                            <path d="M267 216H271V220H267V216Z" fill="#1FE4C1"/>
                            <path d="M251 212H255V216H251V212Z" fill="#1FE4C1"/>
                            <path d="M251 216H255V220H251V216Z" fill="#1FE4C1"/>
                            <line x1="255.1" y1="200" x2="255.1" y2="220" stroke="#343434" stroke-width="0.2"/>
                            <line x1="259.1" y1="208" x2="259.1" y2="212" stroke="#343434" stroke-width="0.2"/>
                            <line x1="263.1" y1="208" x2="263.1" y2="212" stroke="#343434" stroke-width="0.2"/>
                            <line x1="267.1" y1="200" x2="267.1" y2="220" stroke="#343434" stroke-width="0.2"/>
                            <line x1="255" y1="208.1" x2="251" y2="208.1" stroke="#343434" stroke-width="0.2"/>
                            <line x1="255" y1="212.1" x2="251" y2="212.1" stroke="#343434" stroke-width="0.2"/>
                            <line x1="255" y1="216.1" x2="251" y2="216.1" stroke="#343434" stroke-width="0.2"/>
                            <line x1="271" y1="208.1" x2="267" y2="208.1" stroke="#343434" stroke-width="0.2"/>
                            <line x1="271" y1="212.1" x2="267" y2="212.1" stroke="#343434" stroke-width="0.2"/>
                            <line x1="271" y1="216.1" x2="267" y2="216.1" stroke="#343434" stroke-width="0.2"/>
                            <rect x="222" y="220" width="24" height="4" transform="rotate(-90 222 220)" fill="#1FE4C1"/>
                            <path d="M241 197H243V201H241V197Z" fill="#1FE4C1"/>
                            <path d="M241 204H243V208H241V204Z" fill="#1FE4C1"/>
                            <path d="M243 201H245V204H243V201Z" fill="#1FE4C1"/>
                            <rect x="226" y="196" width="15" height="4" fill="#1FE4C1"/>
                            <rect x="226" y="206" width="13" height="4" fill="#1FE4C1"/>
                            <path d="M239 220V206H243V220H239Z" fill="#1FE4C1"/>
                            <path d="M241 207H245V210H241V207Z" fill="#343434"/>
                            <path d="M241.1 196L241.1 201" stroke="#343434" stroke-width="0.2"/>
                            <line x1="237.1" y1="196" x2="237.1" y2="200" stroke="#343434" stroke-width="0.2"/>
                            <line x1="233.1" y1="196" x2="233.1" y2="200" stroke="#343434" stroke-width="0.2"/>
                            <path d="M229.1 196V200" stroke="#343434" stroke-width="0.2"/>
                            <path d="M226 196V200" stroke="#343434" stroke-width="0.2"/>
                            <path d="M226 200H222" stroke="#343434" stroke-width="0.2"/>
                            <path d="M226 203H222" stroke="#343434" stroke-width="0.2"/>
                            <path d="M226 206H222" stroke="#343434" stroke-width="0.2"/>
                            <path d="M226 210H222" stroke="#343434" stroke-width="0.2"/>
                            <path d="M226 214H224H222" stroke="#343434" stroke-width="0.2"/>
                            <path d="M226 217H224H222" stroke="#343434" stroke-width="0.2"/>
                            <path d="M226 217H224H222" stroke="#343434" stroke-width="0.2"/>
                            <path d="M226 210V208V206" stroke="#343434" stroke-width="0.2"/>
                            <path d="M229 210V208V206" stroke="#343434" stroke-width="0.2"/>
                            <path d="M233 210V208V206" stroke="#343434" stroke-width="0.2"/>
                            <path d="M237 210V208V206" stroke="#343434" stroke-width="0.2"/>
                            <path d="M243 210H232.5H222" stroke="#343434" stroke-width="0.2"/>
                            <path d="M243 214H241H239" stroke="#343434" stroke-width="0.2"/>
                            <path d="M243 217H241H239" stroke="#343434" stroke-width="0.2"/>
                            <path d="M241 210V208V206" stroke="#343434" stroke-width="0.2"/>
                            <path d="M241 210V207V204" stroke="#343434" stroke-width="0.2"/>
                            <path d="M196 196H200V200H196V196Z" fill="#1FE4C1"/>
                            <path d="M200 196H204V200H200V196Z" fill="#1FE4C1"/>
                            <path d="M204 196H208V200H204V196Z" fill="#1FE4C1"/>
                            <path d="M204 200H208V204H204V200Z" fill="#1FE4C1"/>
                            <path d="M204 204H208V208H204V204Z" fill="#1FE4C1"/>
                            <path d="M204 208H208V212H204V208Z" fill="#1FE4C1"/>
                            <path d="M204 212H208V216H204V212Z" fill="#1FE4C1"/>
                            <path d="M204 216H208V220H204V216Z" fill="#1FE4C1"/>
                            <path d="M208 196H212V200H208V196Z" fill="#1FE4C1"/>
                            <path d="M212 196H216V200H212V196Z" fill="#1FE4C1"/>
                            <path d="M216 200H196" stroke="#343434" stroke-width="0.2"/>
                            <path d="M208 204H204" stroke="#343434" stroke-width="0.2"/>
                            <path d="M200 200V196" stroke="#343434" stroke-width="0.2"/>
                            <path d="M204 200V196" stroke="#343434" stroke-width="0.2"/>
                            <path d="M208 200V196" stroke="#343434" stroke-width="0.2"/>
                            <path d="M212 200V196" stroke="#343434" stroke-width="0.2"/>
                            <path d="M208 208H204" stroke="#343434" stroke-width="0.2"/>
                            <path d="M208 212H204" stroke="#343434" stroke-width="0.2"/>
                            <path d="M208 216H204" stroke="#343434" stroke-width="0.2"/>
                            <g filter="url(#filter0_d_0_1)">
                            <path d="M325.799 77.0158C327.354 81.9995 322.242 86.4534 317.518 84.2319L274.844 64.1642C269.563 61.681 270.576 53.8847 276.316 52.8329L310.763 46.5207C313.746 45.9739 316.669 47.7401 317.572 50.636L325.799 77.0158Z" fill="#726B6B"/>
                            </g>
                            <path d="M335 124.5C335 165.645 293.66 193 242.297 193C190.935 193 149.297 159.645 149.297 118.5C149.297 77.3548 190.638 50 242 50C293.362 50 335 83.3548 335 124.5Z" fill="#C4C4C4"/>
                            <ellipse cx="288.5" cy="88" rx="4.5" ry="16" fill="#726B6B"/>
                            <ellipse cx="288.5" cy="88" rx="4.5" ry="16" fill="#726B6B"/>
                            <path d="M258 89C258 98.9411 253.866 107 250 107C246.134 107 243 98.9411 243 89C243 79.0589 246.134 71 250 71C253.866 71 258 79.0589 258 89Z" fill="#726B6B"/>
                            <path d="M258 89C258 98.9411 253.866 107 250 107C246.134 107 243 98.9411 243 89C243 79.0589 246.134 71 250 71C253.866 71 258 79.0589 258 89Z" fill="#726B6B"/>
                            <g filter="url(#filter1_d_0_1)">
                            <path d="M213.74 47.9081C218.908 49.6764 219.217 56.8685 214.22 59.0741L163.404 81.5036C158.361 83.7296 153.237 78.5476 155.52 73.5299L171.195 39.0763C172.474 36.2655 175.677 34.8843 178.599 35.884L213.74 47.9081Z" fill="#726B6B"/>
                            </g>
                            <path d="M303.5 135.5C303.5 149.769 289.273 161.5 271.5 161.5C253.727 161.5 239.5 149.769 239.5 135.5C239.5 121.231 253.727 109.5 271.5 109.5C289.273 109.5 303.5 121.231 303.5 135.5Z" fill="#C4C4C4" stroke="#726B6B"/>
                            <path d="M278.303 133.315C278.303 139.114 278.699 143.815 279.803 143.815C280.908 143.815 281.803 139.114 281.803 133.315C281.803 127.516 280.908 122.815 279.803 122.815C278.699 122.815 278.303 127.516 278.303 133.315Z" fill="#726B6B"/>
                            <path d="M278.303 133.315C278.303 139.114 278.699 143.815 279.803 143.815C280.908 143.815 281.803 139.114 281.803 133.315C281.803 127.516 280.908 122.815 279.803 122.815C278.699 122.815 278.303 127.516 278.303 133.315Z" fill="#726B6B"/>
                            <path d="M269.5 133C269.5 138.799 268.828 143.5 268 143.5C267.172 143.5 266.5 138.799 266.5 133C266.5 127.201 267.172 122.5 268 122.5C268.828 122.5 269.5 127.201 269.5 133Z" fill="#726B6B"/>
                            <path d="M269.5 133C269.5 138.799 268.828 143.5 268 143.5C267.172 143.5 266.5 138.799 266.5 133C266.5 127.201 267.172 122.5 268 122.5C268.828 122.5 269.5 127.201 269.5 133Z" fill="#726B6B"/>
                            <path d="M233 51.1L240 51.1L246.5 51.6L254 52.6L258.5 53.5L262.5 54.5" stroke="black"/>
                            <path d="M259.875 46.3796C259.875 51.5573 255.678 55.7546 250.5 55.7546C245.322 55.7546 241.125 51.5573 241.125 46.3796C241.125 41.2019 245.322 37.0046 250.5 37.0046C255.678 37.0046 259.875 41.2019 259.875 46.3796Z" fill="#FFE9AF" stroke="black" stroke-width="0.25"/>
                            <path d="M267.249 26.8696C265.388 31.7012 259.962 34.1095 255.13 32.2485C250.299 30.3876 247.891 24.9621 249.751 20.1304C251.612 15.2988 257.038 12.8905 261.87 14.7515C266.701 16.6124 269.109 22.0379 267.249 26.8696Z" fill="#FFE9AF" stroke="black" stroke-width="0.25"/>
                            <path d="M246.875 30.5C246.875 35.6777 242.678 39.875 237.5 39.875C232.322 39.875 228.125 35.6777 228.125 30.5C228.125 25.3223 232.322 21.125 237.5 21.125C242.678 21.125 246.875 25.3223 246.875 30.5Z" fill="#FFE9AF" stroke="black" stroke-width="0.25"/>
                            <ellipse cx="243" cy="56.5" rx="19" ry="4.5" fill="#C4C4C4"/>
                            <path d="M248.875 9.49999C248.875 14.6777 244.678 18.875 239.5 18.875C234.322 18.875 230.125 14.6777 230.125 9.49999C230.125 4.32232 234.322 0.124993 239.5 0.124993C244.678 0.124993 248.875 4.32232 248.875 9.49999Z" fill="#FFE9AF" stroke="black" stroke-width="0.25"/>
                            <g filter="url(#filter2_d_0_1)">
                            <path d="M419 204.5C419 209.747 414.747 214 409.5 214C404.253 214 400 209.747 400 204.5C400 199.253 404.253 195 409.5 195C414.747 195 419 199.253 419 204.5Z" fill="#FFE9AF"/>
                            <path d="M418.875 204.5C418.875 209.678 414.678 213.875 409.5 213.875C404.322 213.875 400.125 209.678 400.125 204.5C400.125 199.322 404.322 195.125 409.5 195.125C414.678 195.125 418.875 199.322 418.875 204.5Z" stroke="black" stroke-width="0.25"/>
                            </g>
                            <path d="M404.032 200.756V202.616C404.252 202.66 404.456 202.682 404.644 202.682C404.836 202.682 404.964 202.644 405.028 202.568C405.096 202.492 405.13 202.342 405.13 202.118V200.768C405.13 200.572 405.1 200.434 405.04 200.354C404.98 200.274 404.836 200.234 404.608 200.234C404.384 200.234 404.232 200.28 404.152 200.372C404.072 200.46 404.032 200.588 404.032 200.756ZM403.54 198.68H404.002V200.084C404.17 199.928 404.43 199.85 404.782 199.85C405.138 199.85 405.368 199.958 405.472 200.174C405.58 200.386 405.634 200.76 405.634 201.296C405.634 201.76 405.626 202.046 405.61 202.154C405.594 202.258 405.578 202.354 405.562 202.442C405.546 202.526 405.524 202.592 405.496 202.64C405.472 202.684 405.44 202.734 405.4 202.79C405.364 202.846 405.32 202.888 405.268 202.916C405.22 202.944 405.164 202.972 405.1 203C404.984 203.048 404.794 203.072 404.53 203.072C404.266 203.072 403.936 203.014 403.54 202.898V198.68ZM406.424 203.732C406.532 203.756 406.65 203.768 406.778 203.768C406.906 203.768 407.016 203.732 407.108 203.66C407.204 203.592 407.274 203.468 407.318 203.288L407.384 203H407.048L406.322 199.88H406.808L407.426 202.676H407.462L408.08 199.88H408.566L407.774 203.27C407.706 203.562 407.596 203.784 407.444 203.936C407.296 204.088 407.058 204.164 406.73 204.164C406.578 204.164 406.44 204.136 406.316 204.08L406.424 203.732Z" fill="black"/>
                            <path d="M446.875 204.5C446.875 209.678 442.678 213.875 437.5 213.875C432.322 213.875 428.125 209.678 428.125 204.5C428.125 199.322 432.322 195.125 437.5 195.125C442.678 195.125 446.875 199.322 446.875 204.5Z" fill="#FFE9AF" stroke="black" stroke-width="0.25"/>
                            <path d="M431.875 204.5C431.875 209.678 427.678 213.875 422.5 213.875C417.322 213.875 413.125 209.678 413.125 204.5C413.125 199.322 417.322 195.125 422.5 195.125C427.678 195.125 431.875 199.322 431.875 204.5Z" fill="#FFE9AF" stroke="black" stroke-width="0.25"/>
                            <path d="M421.875 212.5C421.875 217.678 417.678 221.875 412.5 221.875C407.322 221.875 403.125 217.678 403.125 212.5C403.125 207.322 407.322 203.125 412.5 203.125C417.678 203.125 421.875 207.322 421.875 212.5Z" fill="#FFE9AF" stroke="black" stroke-width="0.25"/>
                            <path d="M412.832 213.844C412.716 213.908 412.554 213.962 412.346 214.006C412.138 214.05 411.958 214.072 411.806 214.072C411.654 214.072 411.524 214.066 411.416 214.054C411.312 214.046 411.218 214.028 411.134 214C411.05 213.968 410.976 213.938 410.912 213.91C410.848 213.882 410.79 213.834 410.738 213.766C410.69 213.698 410.65 213.64 410.618 213.592C410.586 213.544 410.558 213.466 410.534 213.358C410.514 213.25 410.498 213.16 410.486 213.088C410.474 213.012 410.466 212.896 410.462 212.74C410.454 212.436 410.45 212.15 410.45 211.882C410.45 211.614 410.452 211.412 410.456 211.276C410.46 211.14 410.468 210.976 410.48 210.784C410.496 210.592 410.522 210.456 410.558 210.376C410.594 210.292 410.642 210.198 410.702 210.094C410.762 209.986 410.84 209.912 410.936 209.872C411.192 209.776 411.472 209.728 411.776 209.728C412.084 209.728 412.384 209.772 412.676 209.86L412.586 210.25C412.318 210.186 412.078 210.154 411.866 210.154C411.654 210.154 411.494 210.168 411.386 210.196C411.282 210.224 411.202 210.256 411.146 210.292C411.09 210.328 411.048 210.386 411.02 210.466C410.996 210.546 410.982 210.616 410.978 210.676C410.974 210.732 410.972 210.82 410.972 210.94V212.842C410.972 213.162 411.004 213.356 411.068 213.424C411.172 213.532 411.284 213.596 411.404 213.616C411.524 213.636 411.668 213.646 411.836 213.646C412.004 213.646 412.176 213.628 412.352 213.592V212.23H411.782V211.87H412.832V213.844Z" fill="black"/>
                            <path d="M421.056 199.8V204H420.54V199.8H421.056ZM421.212 201.9L422.316 199.8H422.862L421.758 201.9L422.868 204H422.316L421.212 201.9Z" fill="black"/>
                            <path d="M437.875 212.5C437.875 217.678 433.678 221.875 428.5 221.875C423.322 221.875 419.125 217.678 419.125 212.5C419.125 207.322 423.322 203.125 428.5 203.125C433.678 203.125 437.875 207.322 437.875 212.5Z" fill="#FFE9AF" stroke="black" stroke-width="0.25"/>
                            <path d="M427.738 214H427.21L428.206 209.8H429.082L430.078 214H429.55L429.304 212.938H427.984L427.738 214ZM429.202 212.518L428.662 210.184H428.626L428.08 212.518H429.202Z" fill="black"/>
                            <path d="M438.46 202.98H437.896L437.104 200.622H437.068L436.99 204H436.492L436.618 199.8H437.278L438.16 202.452H438.196L439.078 199.8H439.738L439.864 204H439.366L439.288 200.622H439.252L438.46 202.98Z" fill="black"/>
                            <path d="M146 196H150V200H146V196Z" fill="#1FE4C1"/>
                            <path d="M150 196H154V200H150V196Z" fill="#1FE4C1"/>
                            <path d="M154 196H158V200H154V196Z" fill="#1FE4C1"/>
                            <path d="M154 216H158V220H154V216Z" fill="#1FE4C1"/>
                            <path d="M156 212H160V216H156V212Z" fill="#1FE4C1"/>
                            <path d="M156 208H160V212H156V208Z" fill="#1FE4C1"/>
                            <path d="M156 204H160V208H156V204Z" fill="#1FE4C1"/>
                            <path d="M156 200H160V204H156V200Z" fill="#1FE4C1"/>
                            <path d="M144 200H148V204H144V200Z" fill="#1FE4C1"/>
                            <path d="M144 204H148V208H144V204Z" fill="#1FE4C1"/>
                            <path d="M144 208H148V212H144V208Z" fill="#1FE4C1"/>
                            <path d="M144 212H148V216H144V212Z" fill="#1FE4C1"/>
                            <path d="M146 216H150V220H146V216Z" fill="#1FE4C1"/>
                            <path d="M150 216H154V220H150V216Z" fill="#1FE4C1"/>
                            <path d="M150 200H144" stroke="#343434" stroke-width="0.2"/>
                            <path d="M160 200H150" stroke="#343434" stroke-width="0.2"/>
                            <path d="M148 204H144" stroke="#343434" stroke-width="0.2"/>
                            <path d="M160 204H158H156" stroke="#343434" stroke-width="0.2"/>
                            <path d="M160 208H158H156" stroke="#343434" stroke-width="0.2"/>
                            <path d="M160 212H158H156" stroke="#343434" stroke-width="0.2"/>
                            <path d="M158 220V218V216" stroke="#343434" stroke-width="0.2"/>
                            <path d="M150 220V218.5V216" stroke="#343434" stroke-width="0.2"/>
                            <path d="M150 200V198V196" stroke="#343434" stroke-width="0.2"/>
                            <path d="M154 220V218V216" stroke="#343434" stroke-width="0.2"/>
                            <path d="M154 200V198V196" stroke="#343434" stroke-width="0.2"/>
                            <path d="M146 216H148V212" stroke="#343434" stroke-width="0.2"/>
                            <path d="M148 208H144" stroke="#343434" stroke-width="0.2"/>
                            <path d="M148 212H144" stroke="#343434" stroke-width="0.2"/>
                            <path d="M158 216H148" stroke="#343434" stroke-width="0.2"/>
                            <path d="M146 216H142" stroke="#343434" stroke-width="0.2"/>
                            <path d="M148 215V200" stroke="#343434" stroke-width="0.2"/>
                            <path d="M156 216V200" stroke="#343434" stroke-width="0.2"/>
                            <path d="M118 196H122V200H118V196Z" fill="#1FE4C1"/>
                            <path d="M122 196H126V200H122V196Z" fill="#1FE4C1"/>
                            <path d="M126 196H130V200H126V196Z" fill="#1FE4C1"/>
                            <path d="M126 200H130V204H126V200Z" fill="#1FE4C1"/>
                            <path d="M126 204H130V208H126V204Z" fill="#1FE4C1"/>
                            <path d="M126 208H130V212H126V208Z" fill="#1FE4C1"/>
                            <path d="M126 212H130V216H126V212Z" fill="#1FE4C1"/>
                            <path d="M126 216H130V220H126V216Z" fill="#1FE4C1"/>
                            <path d="M130 196H134V200H130V196Z" fill="#1FE4C1"/>
                            <path d="M134 196H138V200H134V196Z" fill="#1FE4C1"/>
                            <path d="M138 200H118" stroke="#343434" stroke-width="0.2"/>
                            <path d="M130 204H126" stroke="#343434" stroke-width="0.2"/>
                            <path d="M122 200V196" stroke="#343434" stroke-width="0.2"/>
                            <path d="M126 200V196" stroke="#343434" stroke-width="0.2"/>
                            <path d="M130 200V196" stroke="#343434" stroke-width="0.2"/>
                            <path d="M134 200V196" stroke="#343434" stroke-width="0.2"/>
                            <path d="M130 208H126" stroke="#343434" stroke-width="0.2"/>
                            <path d="M130 212H126" stroke="#343434" stroke-width="0.2"/>
                            <path d="M130 216H126" stroke="#343434" stroke-width="0.2"/>
                            <path d="M95 196H99V200H95V196Z" fill="#1FE4C1"/>
                            <path d="M99 196H103V200H99V196Z" fill="#1FE4C1"/>
                            <path d="M103 196H107V200H103V196Z" fill="#1FE4C1"/>
                            <path d="M107 197H110V201H107V197Z" fill="#1FE4C1"/>
                            <path d="M99 204H103V208H99V204Z" fill="#1FE4C1"/>
                            <path d="M103 204H107V208H103V204Z" fill="#1FE4C1"/>
                            <path d="M107 203H110V207H107V203Z" fill="#1FE4C1"/>
                            <path d="M110 200H112V204H110V200Z" fill="#1FE4C1"/>
                            <path d="M95 200H99V204H95V200Z" fill="#1FE4C1"/>
                            <path d="M95 204H99V208H95V204Z" fill="#1FE4C1"/>
                            <path d="M95 208H99V212H95V208Z" fill="#1FE4C1"/>
                            <path d="M95 212H99V216H95V212Z" fill="#1FE4C1"/>
                            <path d="M95 216H99V220H95V216Z" fill="#1FE4C1"/>
                            <path d="M99 200H95" stroke="#343434" stroke-width="0.2"/>
                            <path d="M99 204H95" stroke="#343434" stroke-width="0.2"/>
                            <path d="M99 208V204" stroke="#343434" stroke-width="0.2"/>
                            <path d="M103 208V204" stroke="#343434" stroke-width="0.2"/>
                            <path d="M107 208V203" stroke="#343434" stroke-width="0.2"/>
                            <path d="M99 200V196" stroke="#343434" stroke-width="0.2"/>
                            <path d="M103 200V196" stroke="#343434" stroke-width="0.2"/>
                            <path d="M107 201V196" stroke="#343434" stroke-width="0.2"/>
                            <path d="M99 208H95" stroke="#343434" stroke-width="0.2"/>
                            <path d="M99 212H95" stroke="#343434" stroke-width="0.2"/>
                            <path d="M99 216H95" stroke="#343434" stroke-width="0.2"/>
                            <path d="M73 196H77V200H73V196Z" fill="#1FE4C1"/>
                            <path d="M85 196H89V200H85V196Z" fill="#1FE4C1"/>
                            <path d="M85 200H89V204H85V200Z" fill="#1FE4C1"/>
                            <path d="M82 204H86V208H82V204Z" fill="#1FE4C1"/>
                            <path d="M73 200H77V204H73V200Z" fill="#1FE4C1"/>
                            <path d="M76 204H80V208H76V204Z" fill="#1FE4C1"/>
                            <path d="M79 208H83V212H79V208Z" fill="#1FE4C1"/>
                            <path d="M79 212H83V216H79V212Z" fill="#1FE4C1"/>
                            <path d="M79 216H83V220H79V216Z" fill="#1FE4C1"/>
                            <path d="M77 200H75H73" stroke="#343434" stroke-width="0.2"/>
                            <path d="M82 208H78H76" stroke="#343434" stroke-width="0.2"/>
                            <path d="M80 204H76.5H73" stroke="#343434" stroke-width="0.2"/>
                            <path d="M89 200H85" stroke="#343434" stroke-width="0.2"/>
                            <path d="M89 204L82 204" stroke="#343434" stroke-width="0.2"/>
                            <path d="M86 208H82" stroke="#343434" stroke-width="0.2"/>
                            <path d="M83 212H79" stroke="#343434" stroke-width="0.2"/>
                            <path d="M83 216H79" stroke="#343434" stroke-width="0.2"/>
                            <rect x="44" y="220" width="24" height="4" transform="rotate(-90 44 220)" fill="#1FE4C1"/>
                            <path d="M63 197H65V201H63V197Z" fill="#1FE4C1"/>
                            <path d="M63 204H65V208H63V204Z" fill="#1FE4C1"/>
                            <path d="M65 201H67V204H65V201Z" fill="#1FE4C1"/>
                            <rect x="48" y="196" width="15" height="4" fill="#1FE4C1"/>
                            <rect x="48" y="206" width="13" height="4" fill="#1FE4C1"/>
                            <path d="M61 220V206H65V220H61Z" fill="#1FE4C1"/>
                            <path d="M63 207H67V210H63V207Z" fill="#343434"/>
                            <path d="M63.1 196L63.1 201" stroke="#343434" stroke-width="0.2"/>
                            <line x1="59.1" y1="196" x2="59.1" y2="200" stroke="#343434" stroke-width="0.2"/>
                            <line x1="55.1" y1="196" x2="55.1" y2="200" stroke="#343434" stroke-width="0.2"/>
                            <path d="M51.1 196V200" stroke="#343434" stroke-width="0.2"/>
                            <path d="M48 196V200" stroke="#343434" stroke-width="0.2"/>
                            <path d="M48 200H44" stroke="#343434" stroke-width="0.2"/>
                            <path d="M48 203H44" stroke="#343434" stroke-width="0.2"/>
                            <path d="M48 206H44" stroke="#343434" stroke-width="0.2"/>
                            <path d="M48 210H44" stroke="#343434" stroke-width="0.2"/>
                            <path d="M48 214H46H44" stroke="#343434" stroke-width="0.2"/>
                            <path d="M48 217H46H44" stroke="#343434" stroke-width="0.2"/>
                            <path d="M48 217H46H44" stroke="#343434" stroke-width="0.2"/>
                            <path d="M48 210V208V206" stroke="#343434" stroke-width="0.2"/>
                            <path d="M51 210V208V206" stroke="#343434" stroke-width="0.2"/>
                            <path d="M55 210V208V206" stroke="#343434" stroke-width="0.2"/>
                            <path d="M59 210V208V206" stroke="#343434" stroke-width="0.2"/>
                            <path d="M65 210H54.5H44" stroke="#343434" stroke-width="0.2"/>
                            <path d="M65 214H63H61" stroke="#343434" stroke-width="0.2"/>
                            <path d="M65 217H63H61" stroke="#343434" stroke-width="0.2"/>
                            <path d="M63 210V208V206" stroke="#343434" stroke-width="0.2"/>
                            <path d="M63 210V207V204" stroke="#343434" stroke-width="0.2"/>
                            <path d="M14 196H38V200H14V196Z" fill="#1FE4C1"/>
                            <path d="M18 216H38V220H18V216Z" fill="#1FE4C1"/>
                            <rect x="14" y="196" width="4" height="24" fill="#1FE4C1"/>
                            <line x1="34.1" y1="196" x2="34.1" y2="200" stroke="#343434" stroke-width="0.2"/>
                            <line x1="30.1" y1="196" x2="30.1" y2="200" stroke="#343434" stroke-width="0.2"/>
                            <line x1="26.1" y1="196" x2="26.1" y2="200" stroke="black" stroke-width="0.2"/>
                            <line x1="26.1" y1="216" x2="26.1" y2="220" stroke="black" stroke-width="0.2"/>
                            <line x1="30.1" y1="216" x2="30.1" y2="220" stroke="black" stroke-width="0.2"/>
                            <line x1="34.1" y1="216" x2="34.1" y2="220" stroke="black" stroke-width="0.2"/>
                            <line x1="22.1" y1="196" x2="22.1" y2="200" stroke="black" stroke-width="0.2"/>
                            <line x1="22.1" y1="216" x2="22.1" y2="220" stroke="black" stroke-width="0.2"/>
                            <path d="M18.1 196V200" stroke="black" stroke-width="0.2"/>
                            <path d="M18 216V220" stroke="black" stroke-width="0.2"/>
                            <path d="M18 200H14" stroke="black" stroke-width="0.2"/>
                            <path d="M18 204H14" stroke="black" stroke-width="0.2"/>
                            <path d="M18 208H14" stroke="black" stroke-width="0.2"/>
                            <path d="M18 212H14" stroke="black" stroke-width="0.2"/>
                            <path d="M18 216H14" stroke="black" stroke-width="0.2"/>
                            <defs>
                            <filter id="filter0_d_0_1" x="267.395" y="46.4217" width="62.6886" height="46.3969" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                            </filter>
                            <filter id="filter1_d_0_1" x="150.961" y="35.5598" width="70.8365" height="54.4746" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                            </filter>
                            <filter id="filter2_d_0_1" x="396" y="195" width="27" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </a>
                </Link>
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout;