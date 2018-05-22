/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as path from 'path';
import uri from 'vs/base/common/uri';

const rootPath = path.dirname(uri.parse(require.toUrl('')).fsPath);
const minimalTranslationsJsonPath = path.join(rootPath, 'minimalTranslations.json');
export default require.__$__nodeRequire(minimalTranslationsJsonPath) as JSON;

