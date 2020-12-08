import React from 'react';
import PopConfirm from './mods/PopConfirm';
import styles from './App.module.css';

function App() {
	const handleConfirm = () => {
		console.log('confirm');
	};

	const handleCancel = () => {
		console.log('cancel');
	};

	return (
		<div className={styles.App}>
			<div className={styles.box}>
				<PopConfirm
					title={'确认删除?'}
					desc={'删除后不可恢复'}
					confirmText={'ok'}
					cancelText={'cancel'}
					onConfirm={handleConfirm}
					onCancel={handleCancel}
				>
					<span>test text</span>
				</PopConfirm>
			</div>
		</div>
	);
}

export default App;
