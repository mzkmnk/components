import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { signalStore, withMethods, withState } from '@ngrx/signals';

export type TNavigatePath = 'components'|'messagePage';

export type TInitialState = {
    path:TNavigatePath
}

const initialState : TInitialState = {
    path:'components'
}

export const routerSignalStore = signalStore(
    {
        providedIn:'root'
    },
    withState(initialState),
    withMethods((
        _signalStore,
        [router] = [inject(Router)]
    ) => ({
        navigate(path:TNavigatePath){
            router.navigate([path]);
        }
    })),
)