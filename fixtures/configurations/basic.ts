import {AbstractOperationType, ConfigurationType} from '../../src/decs/domain';

export function minimalConfiguration(): ConfigurationType {
  {
    return {connectionUrl: ''};
  }
}

export function configWithUrl() {
  return {
    connectionUrl: 'postgres://',
  };
}

export function emptyAOO(): AbstractOperationType {
  return {
    aoo: {},
  };
}
