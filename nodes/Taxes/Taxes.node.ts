import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { resTaxes  } from './Taxes';
import { resVat  } from './Vat';

export class Taxes implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Altazion API - Taxes',
		name: 'Taxes',
		icon: {light: 'file:altazion-noir.svg', 
			dark: 'file:altazion-blanc.svg' 
		},
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact Altazion API',
		defaults: {
			name: 'Altazion Taxes',
		},
		inputs: [],
		outputs: [],
		credentials: [
			{
				name: 'altazionApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://app.office.altazion.com',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{ name: 'Taxes', value: 'Taxes' },
			{ name: 'Vat', value: 'VAT' },
		],
		default: 'Taxes',
	},
			 ...resTaxes,
			 ...resVat,
			

		]
	};
}
