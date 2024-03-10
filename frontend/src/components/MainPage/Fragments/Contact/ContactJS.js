import { HiOutlineArrowUturnRight } from "react-icons/hi2";
import { CiFaceFrown, CiFaceMeh, CiFaceSmile } from "react-icons/ci";
const ContactJS = () => {
    const backSideData = [
        {
          h2: 'Contact Information',
          information: [
            {
              icon: HiOutlineArrowUturnRight,
              type: 'Phone number',
              data: '+359895684863'
            },
            {
              icon: HiOutlineArrowUturnRight,
              type: 'G-mail',
              data: 'niki5kaloianov@gmail.com'
            },
            {
              icon: HiOutlineArrowUturnRight,
              type: 'Discord',
              data: 'niki100'
            },
            {
              icon: HiOutlineArrowUturnRight,
              type: 'LinkedIn',
              data: 'Nikolai Kaloyanov'
            },
          ]
        },
        {
          h2: 'Perfect call time for me',
          information: [
            {
              icon: CiFaceSmile,
              type: 'Perfect',
              data: '07: 00 - 15:00',
            },
            {
              icon: CiFaceMeh,
              type: 'Good',
              data: '23: 00 - 07:00',
            },
            {
              icon: CiFaceFrown,
              type: 'Bad',
              data: '15: 00 - 23:00',
            },
          ]
        }
      ]
  return {
    backSideData
  }
}

export default ContactJS
