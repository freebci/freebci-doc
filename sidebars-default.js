/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Start Here',
      link: {
        type: 'doc',
        id: 'start-here/index',
      },
      items: [
        'getting-started',
        'start-here/index',
        'hardware/safety-and-lab-setup',
        'hardware/connect-to-freebci-daq',
        'hardware/upgrade-from-1ch-to-8ch',
      ],
    },
    {
      type: 'category',
      label: 'FreeBCI Spike',
      link: {
        type: 'doc',
        id: 'hardware/index',
      },
      items: [
        'hardware/choose-your-module',
        'hardware/manufacturing-and-assembly',
        {
          type: 'category',
          label: 'Spike 1CH LH001',
          link: {
            type: 'doc',
            id: 'hardware/spike-1ch-lh001/index',
          },
          items: [
            'hardware/spike-1ch-lh001/first-power-on',
            'hardware/spike-1ch-lh001/focus-demo',
          ],
        },
        {
          type: 'category',
          label: 'Spike 8CH ADS1299',
          link: {
            type: 'doc',
            id: 'hardware/spike-8ch-ads1299/index',
          },
          items: [
            'hardware/spike-8ch-ads1299/first-power-on',
            'hardware/spike-8ch-ads1299/multichannel-eeg-setup',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'FreeBCI DAQ',
      link: {
        type: 'doc',
        id: 'freebci-daq/index',
      },
      items: [
        'freebci-daq/quick-start',
        'freebci-daq/hardware-setup',
        'freebci-daq/live-monitoring',
        'freebci-daq/engagement-focus',
        'freebci-daq/ai-analysis',
        'freebci-daq/sessions',
        'freebci-daq/system-tuning',
        'freebci-daq/tuning-guide',
        {
          type: 'category',
          label: 'Reference',
          items: [
            'freebci-daq/reference/data-pipeline',
            'freebci-daq/reference/algorithms-detail',
            'freebci-daq/reference/ai-integration',
            'freebci-daq/reference/configuration',
            'freebci-daq/reference/troubleshooting',
            'freebci-daq/reference/faq',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Developers',
      items: [
        'contributing',
        'software',
        'freebci-daq/reference/developer-guide',
        {
          type: 'category',
          label: 'Dev Tutorials',
          link: {
            type: 'doc',
            id: 'freebci-daq/dev/index',
          },
          items: [
            'freebci-daq/dev/setup',
            'freebci-daq/dev/architecture-tour',
            'freebci-daq/dev/add-a-panel',
            'freebci-daq/dev/add-an-algorithm',
            'freebci-daq/dev/serial-protocol',
            'freebci-daq/dev/state-management',
            'freebci-daq/dev/iir-filter',
            'freebci-daq/dev/ai-pipeline',
            'freebci-daq/dev/i18n-and-theme',
            'freebci-daq/dev/testing',
            'freebci-daq/dev/build-and-deploy',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
