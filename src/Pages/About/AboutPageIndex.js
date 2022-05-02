import React, { useState } from 'react';
import AboutPage1 from './AboutPage1';
import AboutPage2 from './AboutPage2';
import AboutPage3 from './AboutPage3';

const AboutPageIndex = () => {
	const [formPage, setFormPage] = useState(1);
	const formNext = () => {
		setFormPage(formPage + 1);
	};
	const formBack = () => {
		setFormPage(formPage - 1);
	};

	switch (formPage) {
		case 1:
			return <AboutPage1 next={formNext} />;
		case 2:
			return <AboutPage2 next={formNext} back={formBack} />;
		default:
			return <AboutPage3 back={formBack} />;
	}
};

export default AboutPageIndex;
