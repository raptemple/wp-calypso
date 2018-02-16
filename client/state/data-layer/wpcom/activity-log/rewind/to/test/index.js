/** @format */
/**
 * Internal dependencies
 */
import { receiveRestoreSuccess } from '../';
import { requestRewindState } from 'state/rewind/actions';

describe( 'receiveRestoreSuccess', () => {
	test( 'should dispatch get restore progress on success', () => {
		expect( receiveRestoreSuccess( { siteId: 1337 } ) ).toEqual( requestRewindState( 1337 ) );
	} );
} );
