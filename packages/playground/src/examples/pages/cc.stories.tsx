import { useContext } from 'react';
import { themeContext } from '../context';
import { GraphicWalker, IColorConfig } from '@kanaries/graphic-walker';
import { IDataSource, useFetch } from '../util';

const colorConfig: IColorConfig = {
    light: {
        background: 'amber-100',
        foreground: 'amber-950',
        primary: 'amber-950',
        'primary-foreground': 'amber-50',
        muted: 'amber-200',
        'muted-foreground': 'amber-500',
        border: 'amber-300',
        ring: 'amber-950',
    },
    dark: {
        background: 'amber-900',
        foreground: 'white',
        primary: '#fff',
        'primary-foreground': 'amber-800',
        muted: 'amber-700',
        'muted-foreground': 'amber-400',
        border: 'amber-700',
        ring: 'amber-300',
    },
};

export default function GraphicWalkerComponent() {
    const { theme } = useContext(themeContext);
    const { dataSource, fields } = useFetch<IDataSource>('https://chspace.oss-cn-hongkong.aliyuncs.com/api/ds-students-service.json');
    return (
        <div className="bg-amber-100 dark:bg-amber-900 p-4">
            <GraphicWalker rawFields={fields} dataSource={dataSource} dark={theme} colorConfig={colorConfig} />
        </div>
    );
}
