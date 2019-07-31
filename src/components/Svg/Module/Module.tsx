import { Modules } from 'nhex-redux';
import React, { CSSProperties, FC } from 'react';

import { SQRT3 } from '../../../constants';
import { Agitator, Connection, Medic, Mother, Officer, Saboteur, Scout } from '../index';

interface Props {
  module?: [boolean, boolean, boolean, boolean, boolean, boolean]
  moduleType?: Modules
  style?: CSSProperties
  text?: string | number
  width: number
}

const Module: FC<Props> = (props) => {
  const { module, moduleType, style, text, width } = props;
  const height = SQRT3 * width;
  const Icon = getModuleIcon();
  const color = getColor();
  const cx = width;
  const cy = height / 2;

  return (
    <>
      {module && module.map((hasConnection, index) => hasConnection && (
        <Connection color={color} dir={index} height={height} key={index} width={width}/>
      ))}
      <circle
        cx={cx}
        cy={cy}
        r={width / 2 - 2}
        fill="white"
        stroke="black"
        strokeWidth="4"
        style={style}
      />
      {text !== undefined && (
        <text
          alignmentBaseline="central"
          fill="black"
          fontSize={2 * width / 3}
          fontWeight="bold"
          textAnchor="middle"
          x={cx}
          y={cy - 1}
        >{text}</text>
      )}
      {Icon && (
        <Icon color={color} cx={cx} cy={cy} width={width}/>
      )}
    </>
  );

  function getColor() {
    switch(moduleType) {
      case Modules.Agitator:
      case Modules.Saboteur:
        return 'red';

      default:
        return 'black';
    }
  }

  function getModuleIcon() {
    switch(moduleType) {
      case Modules.Agitator:
        return Agitator;

      case Modules.Medic:
        return Medic;

      case Modules.Mother:
        return Mother;

      case Modules.Officer:
        return Officer;

      case Modules.Saboteur:
        return Saboteur;

      case Modules.Scout:
        return Scout;
    }
  }
};

export default Module;
