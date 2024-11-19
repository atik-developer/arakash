"use client"
import { useContext } from 'react'
import Image from 'next/image'
import Akash4 from '@/public/akash4.png'
import Akash5 from '@/public/akash5.png'
import { Contex } from '@/app/contex/DarkContext'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import AkashPdf from '@/public/akash.pdf'

const Profile = () => {
    let { dark } = useContext(Contex)
    return (
        <div className={`${dark ? "dark" : null}`}>
            <div className="dark:bg-[#0c0c0c] bg-[#fff] rounded-b-3xl rounded-tl-3xl text-[#0c0c0c] dark:text-[#fff]">
                <div className='p-5 md:p-10'>
                    <div className="rounded-b-3xl rounded-tl-3xl lg:w-72 lg:h-72 bg-stone-200 overflow-hidden">
                        <Image className='h-full w-full object-cover' src={Akash5} alt='Akash' />
                    </div>
                    <div className="mt-[49px] mb-0">
                        <h3 className='font-normal text-sm leading-[170%] uppercase text-center text-[#78cc6d]'>next js developer</h3>
                        <h2 className="mt-2 font-semibold text-3xl leading-[107%] text-center dark:text-[#fff] text-[#0c0c0c]">AR AKASH</h2>
                        <div className="icon mt-5 flex gap-2 justify-center items-center">
                            <Link target='_blank' href='https://www.linkedin.com/in/arakash-developer/' className='inline-block center rounded-2xl w-12 h-12 border-2 dark:border-[#ffffff1f]'>
                                <FontAwesomeIcon className='dark:text-[#fff] text-[#0c0c0c]' icon={faLinkedin} />
                            </Link>
                            <Link target='_blank' href='https://github.com/arakash-developer/' className='inline-block center rounded-2xl w-12 h-12 border-2 dark:border-[#ffffff1f]'>
                                <FontAwesomeIcon className='dark:text-[#fff] text-[#0c0c0c]' icon={faGithub} />
                            </Link>
                            <Link target='_blank' href='https://www.facebook.com/arakash.developer/' className='inline-block center rounded-2xl w-12 h-12 border-2 dark:border-[#ffffff1f]'>
                                <FontAwesomeIcon className='dark:text-[#fff] text-[#0c0c0c]' icon={faFacebook} />
                            </Link>
                            <Link target='_blank' href='https://www.instagram.com/arakash.developer/' className='inline-block center rounded-2xl w-12 h-12 border-2 dark:border-[#ffffff1f]'>
                                <FontAwesomeIcon className='dark:text-[#fff] text-[#0c0c0c]' icon={faTwitter} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="button flex justify-between ">
                    <a href={AkashPdf} download={AkashPdf} className='w-1/2 font-semibold text-sm text-center py-6 border-t-2 border-r dark:border-[#ffffff1f] rounded-bl-3xl'>
                        Download Cv
                    </a>
                    <Link href='' className='w-1/2 font-semibold text-sm text-center py-6 border-l border-t-2 dark:border-[#ffffff1f] rounded-br-3xl'>
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Profile

