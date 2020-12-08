import React from 'react';
import RCToolTip from 'rc-tooltip';
import styles from './index.module.css';
import 'rc-tooltip/assets/bootstrap_white.css';

const PopTipComp: React.FC<{
	title?: string;
	desc?: string;
	onCancel?: React.MouseEventHandler;
	onConfirm?: React.MouseEventHandler;
	cancelText?: string;
	confirmText?: string;
}> = ({ title, desc, onCancel, onConfirm, cancelText, confirmText }) => {
	return (
		<>
			<span className={styles.popTitle}>{title}</span>
			<span className={styles.popDesc}>{desc}</span>
			<hr className={styles.popDivider} />
			<div className={styles.popActionWrap}>
				<button className={styles.btn} onClick={onCancel}>
					{cancelText}
				</button>
				<button className={styles.btn} onClick={onConfirm}>
					{confirmText}
				</button>
			</div>
		</>
	);
};

const PopConfirm: React.FC<{
	children?: JSX.Element;
	title?: string;
	desc?: string;
	onCancel?: React.MouseEventHandler;
	onConfirm?: React.MouseEventHandler;
	cancelText?: string;
	confirmText?: string;
}> = props => {
	if (!props.children) {
		return null;
	}

	return (
		<RCToolTip
			trigger={['click']}
			placement="top"
			overlayClassName={styles.popWrap}
			overlay={<PopTipComp {...props} />}
		>
			<div>{props.children}</div>
		</RCToolTip>
	);
};

export default PopConfirm;
