import { IconType } from 'react-icons';

import {
	HiChevronUp,
	HiChevronDown,
	HiChevronRight,
	HiChevronLeft,
	HiArrowUpRight,
	HiOutlineArrowPath,
	HiCheck,
	HiMiniQuestionMarkCircle,
	HiMiniXMark,
	HiOutlineLink,
	HiExclamationTriangle,
	HiInformationCircle,
	HiExclamationCircle,
	HiCheckCircle,
	HiMiniGlobeAsiaAustralia,
	HiArrowTopRightOnSquare,
	HiEnvelope,
	HiCalendarDays,
	HiClipboard,
	HiArrowRight,
	HiTrophy,
	HiPresentationChartBar,
	HiUserGroup,
	HiShieldCheck,
	HiRocketLaunch,
	HiSparkles,
	HiCpuChip,
	HiSignal
} from "react-icons/hi2";

import { GoClockFill } from "react-icons/go";

import {
	PiHouseDuotone,
	PiUserCircleDuotone,
	PiGridFourDuotone,
	PiBookBookmarkDuotone,
	PiImageDuotone
} from "react-icons/pi";

import {
	FaDiscord,
	FaGithub,
	FaLinkedin,
	FaXTwitter,
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
	chevronUp: HiChevronUp,
  chevronDown: HiChevronDown,
	chevronRight: HiChevronRight,
	chevronLeft: HiChevronLeft,
	refresh: HiOutlineArrowPath,
	arrowUpRight: HiArrowUpRight,
	check: HiCheck,
	arrowRight: HiArrowRight,
	helpCircle: HiMiniQuestionMarkCircle,
	infoCircle: HiInformationCircle,
	warningTriangle: HiExclamationTriangle,
	errorCircle: HiExclamationCircle,
	checkCircle: HiCheckCircle,
	email: HiEnvelope,
	globe: HiMiniGlobeAsiaAustralia,
	person: PiUserCircleDuotone,
	grid: PiGridFourDuotone,
	book: PiBookBookmarkDuotone,
	close: HiMiniXMark,
	openLink: HiOutlineLink,
	calendar: HiCalendarDays,
	home: PiHouseDuotone,
	gallery: PiImageDuotone,
	discord: FaDiscord,
	github: FaGithub,
	linkedin: FaLinkedin,
	x: FaXTwitter,
	clipboard: HiClipboard,
	arrowUpRightFromSquare: HiArrowTopRightOnSquare,
	trophy: HiTrophy,
	presentation: HiPresentationChartBar,
	users: HiUserGroup,
	shield: HiShieldCheck,
	rocket: HiRocketLaunch,
	sparkles: HiSparkles,
	cpu: HiCpuChip,
	signal: HiSignal,
	clock: GoClockFill
};