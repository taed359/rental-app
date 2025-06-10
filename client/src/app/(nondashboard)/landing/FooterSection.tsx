import Link from "next/link"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons"

const FooterSection = () => {
    return (
        <footer className="border-t border-gray-200 py-20">
            <div className="mx-auto max-w-4xl px-6 sm:px-8">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="mb-4">
                        <Link
                            href="/"
                            className="text-xl font-bold"
                            scroll={false}
                        >
                            RENTIFUL
                        </Link>
                    </div>

                    <nav className="mb-4">
                        <ul className="flex space-x-6">
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link href="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link href="/terms">Terms</Link>
                            </li>
                            <li>
                                <Link href="/privacy">Privacy</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="mb-4 flex space-x-4">
                        <a
                            href="https://www.facebook.com/taed13/"
                            target="_blank"
                            aria-label="Facebook"
                            className="hover:text-primary-600"
                        >
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="h-6 w-6"
                            />
                        </a>
                        <a
                            href="https://x.com/taedtech13"
                            target="_blank"
                            aria-label="Twitter"
                            className="hover:text-primary-600"
                        >
                            <FontAwesomeIcon
                                icon={faTwitter}
                                className="h-6 w-6"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/taed13/"
                            target="_blank"
                            aria-label="Linkedin"
                            className="hover:text-primary-600"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="h-6 w-6"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/@taed13"
                            target="_blank"
                            aria-label="Youtube"
                            className="hover:text-primary-600"
                        >
                            <FontAwesomeIcon
                                icon={faYoutube}
                                className="h-6 w-6"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/taed1011_/"
                            target="_blank"
                            aria-label="Instagram"
                            className="hover:text-primary-600"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="h-6 w-6"
                            />
                        </a>
                    </div>
                </div>
                <div className="mt-8 flex justify-center space-x-4 text-center text-sm text-gray-500">
                    <span>&copy; {new Date().getFullYear()} RENTIFUL</span>
                    <Link href="/privacy">Privacy Policy</Link>
                    <Link href="/terms">Terms of Service</Link>
                    <Link href="/cookies">Cookie Policy</Link>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection
